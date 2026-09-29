/** @format */

const getCredentials = (req) => {
  const email =
    typeof req.body?.email === "string" ? req.body.email.trim() : "";
  const password =
    typeof req.body?.password === "string" ? req.body.password : "";

  return { email, password };
};

export const signup = (req, res) => {
  const { email, password } = getCredentials(req);

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  return res.status(201).json({
    success: true,
    message: "Signup request received",
    user: { email },
  });
};

export const login = (req, res) => {
  const { email, password } = getCredentials(req);

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Login request received",
    user: { email },
  });
};

export const logout = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Logout successful",
  });
};
