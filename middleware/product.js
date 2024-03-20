const ProductObject = joi.object({
  name: joi.string().required().empty().messages({
    "any.required": "ten khong dc de trong",
    "string.empty": "ten khong dung dinh dang",
  }),
  image: joi.string().required().empty().messages({
    "any.required": "anh khong dc de trong",
    "string.empty": "anh khong dung dinh dang",
  }),
  pice: joi.number().required().min(1000).messages({
    "any.required": "gia khong duoc de trong",
    "number.min": "gia san pham khong nho hon 1000",
  }),
});
export const checkProductValidate = (req, res, next) => {
  const { name, image, price } = req.body;
  const { error } = ProductObject.validate({ name, image, price });
  if (error) {
    res.send({ status: false, messages: error.messages });
  } else {
    next();
  }
};
