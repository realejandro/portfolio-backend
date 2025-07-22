import { User } from '../models/index.js';


interface UserArgs {
  username: string,
  password: string
}



const resolvers = {
  Query: {
    users: async (_parent: any)  => {
      try { 
        return User.findAll();
      } catch(error) {
        console.error(error);
        return [];
      }
    },
    // Query to get the authenticated user's information
    // The 'me' query relies on the context to check if the user is authenticated
    /*
    me: async (_parent: any, _args: any, context: any) => {
      // If the user is authenticated, find and return the user's information along with their thoughts
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('thoughts');
      }
      // If the user is not authenticated, throw an AuthenticationError
      throw new AuthenticationError('Could not authenticate user.');
    },*/
  },
};

export default resolvers;
