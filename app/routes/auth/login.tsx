import { json } from '@remix-run/node';
import type { ActionFunction } from '@remix-run/node';
import { useActionData, useSearchParams } from '@remix-run/react';
import { createUserSession, login, register } from '~/utils/session.server';
import { db } from '~/utils/db.server';
import Container from '~/components/Container';
import React from 'react';

function validateUsername(name: string) {
  if (typeof name !== 'string' || name.length < 3) {
    return `Usernames must be atleast 3 characters long`;
  }
}

function validatePassword(password: string) {
  if (typeof password !== 'string' || password.length < 6) {
    return ` Passwords must be atleast 6 characters long`;
  }
}
function validateUrl(url: any) {
  console.log(url);
  let urls = ['/'];
  if (urls.includes(url)) {
    return url;
  }
  return '/';
}

const badRequest = (data: any) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const loginType = form.get('buttonVal');
  console.log(loginType);
  const name = form.get('name');
  const password = form.get('password');
  const redirectTo = validateUrl(form.get('redirectTo') || '/');

  if (
    typeof loginType !== 'string' ||
    typeof name !== 'string' ||
    typeof password !== 'string' ||
    typeof redirectTo !== 'string'
  ) {
    return badRequest({ formError: 'Form not submitted correctly' });
  }

  const fields = { loginType, name, password };
  const fieldErrors = {
    name: validateUsername(name),
    password: validatePassword(password),
  };

  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });

  switch (loginType) {
    case 'login': {
      const user = await login({ name, password });
      console.log({ user });
      if (!user) {
        return badRequest({
          fields,
          formError: `Username/Password combination is incorrect`,
        });
      }

      return createUserSession(user.id, redirectTo);
    }
    case 'register': {
      const userExists = await db.user.findFirst({ where: { name: name } });

      if (userExists)
        return badRequest({
          fields,
          formError: `User with name ${name} already exists`,
        });
      const user = await register({ name, password });

      if (!user)
        return badRequest({
          fields,
          formError: `Something went wrong while trying to create a new user`,
        });

      return createUserSession(user.id, redirectTo);
    }

    default: {
      return badRequest({ fields, formError: `Login type invalid` });
    }
  }
};

const inputClassName = `w-full  border-b border-lightorange px-2 py-1  text-secondary outline-none focus:border-secondary font-light`;
const buttonClassName = `py-2 px-7   hover:bg-secondary w-full hover:text-white bg-white text-black border-secondary border hover:border-none font-silka`;

const Login = () => {
  const actionData = useActionData();
  const [searchParams] = useSearchParams();

  const [authType, setAuthType] = React.useState('login');
  return (
    <div className='flex items-center justify-center h-screen bg-white'>
      <Container>
        <div className='flex justify-center items-center content-center text-black'>
          <div className='w-96 bg-white   font-bold px-5 py-6 rounded-md'>
            <form method='post' className='font-silka'>
              <h1 className='text-center text-4xl  font-regis  text-secondary'>
                Ottelo.
              </h1>
              <input
                type='hidden'
                name='redirectTo'
                value={searchParams.get('redirectTo') ?? undefined}
              />
              <h3 className='w-full text-center mt-6 opacity-60'>
                {authType === 'login' ? 'Sign in' : 'Sign up'}
              </h3>

              <div className='mt-8 flex flex-col gap-9'>
                <input
                  type='text'
                  className={inputClassName}
                  name='name'
                  required
                  placeholder='username'
                  minLength={3}
                  defaultValue={actionData?.fields?.name}
                  aria-invalid={Boolean(actionData?.fieldErrors?.name)}
                  aria-errormessage={
                    actionData?.fieldErrors?.name ? 'name-error' : undefined
                  }
                />
                {actionData?.fieldErrors?.username ? (
                  <p className='text-red-500' role='alert' id='name-error'>
                    {actionData.fieldErrors.username}
                  </p>
                ) : null}

                <input
                  name='password'
                  className={inputClassName}
                  required
                  defaultValue={actionData?.fields?.password}
                  type='password'
                  placeholder='password'
                  aria-invalid={
                    Boolean(actionData?.fieldErrors?.password) || undefined
                  }
                  aria-errormessage={
                    actionData?.fieldErrors?.password
                      ? 'password-error'
                      : undefined
                  }
                />
                {actionData?.fieldErrors?.password ? (
                  <p className='text-red-500' role='alert' id='password-error'>
                    {actionData.fieldErrors.password}
                  </p>
                ) : null}
              </div>
              <div id='form-error-message'>
                {actionData?.formError ? (
                  <p className='text-red-500' role='alert'>
                    {actionData.formError}
                  </p>
                ) : null}
              </div>

              <button
                className={`${buttonClassName} mt-8`}
                type='submit'
                name='buttonVal'
                value={authType === 'login' ? 'login' : 'register'}
              >
                {authType === 'login' ? 'Login' : 'Register'}
              </button>
            </form>
            <div className='flex flex-col gap-6 mt-12'>
              <h2 className='opacity-60 font-light font-silka'>
                {authType === 'login'
                  ? 'Dont have an account?'
                  : 'Already have an account?'}
              </h2>
              <button
                className={buttonClassName}
                onClick={() => {
                  authType === 'login'
                    ? setAuthType('register')
                    : setAuthType('login');
                }}
              >
                {authType === 'login' ? 'Create a new account' : 'Login'}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
