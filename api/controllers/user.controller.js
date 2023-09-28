import { signUp, signIn, updateProfile } from '../service/user.service.js';

export const signUpController = async (req, res) => {
  try {
    const result = await signUp(req.body);
    res.status(result.status).send(result);
  } catch (err) {
    res.status(500).send({ message: "An error occurred while registering a user" });
  }
};

export const signInController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await signIn(email, password);
    res.status(result.status).send(result);
  } catch (err) {
    res.status(500).send({ message: "An error occurred while signing in" });
  }
};

export const updateProfileController = async (req, res) => {
  try {
    const userId = req.params.userId; 
    const updatedData = req.body; 
    const result = await updateProfile(userId, updatedData);
    res.status(result.status).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "An error occurred while updating the user profile" });
  }
};
