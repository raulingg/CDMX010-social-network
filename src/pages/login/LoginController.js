import Login from './LoginComponent.js';

export default async (target, { signIn }) => {
  Login({ signIn }).render(target);
};
