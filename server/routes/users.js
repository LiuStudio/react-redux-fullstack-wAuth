import express from 'express';
import validateInput from '../sharefolder/validations/signup';


let router = express.Router();


router.post('/', (req,res) => {
	const { errors, isValid } = validateInput(req.body);

	if (!isValid) {
		res.status(400).json(errors);
	}
});
export default router;
