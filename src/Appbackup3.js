import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut, Authenticator } from '@aws-amplify/ui-react';
import { Amplify, Auth } from 'aws-amplify';
import awsExports from './aws-exports';

import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

function App() {
   return (
    <div>
      <h1>Help!</h1>
      <AmplifySignOut />
    </div>
   );
}

export default withAuthenticator(App);