import { gql } from '@apollo/client';
import { graphQLClient } from '~/lib/apollo';

const mutation = gql`
  mutation signupuser {
    signup {
      id
      token
      name
      avatar
      contact
      walletId
      income
      bookings
      hotels
    }
  }
`;

const Auth = () => {
  const signup = async () => {
    console.log('hello');
    const { data } = await graphQLClient.mutate({ mutation });
    console.log(data);
  };
  return (
    <div className='flex items-center h-full justify-center'>
      <button
        className='bg-blue-500 p-2 text-white rounded-md'
        onClick={signup}
      >
        Signup with google
      </button>
    </div>
  );
};

export default Auth;
