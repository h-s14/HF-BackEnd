export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  //   const cookieName = user.role === "Admin" ? "adminToken" : "patientToken";
  const cookieName =
    user.role === "Admin"
      ? "adminToken"
      : user.role === "Doctor"
      ? "doctorToken"
      : "patientToken";
  res
    .status(statusCode)
    .cookie(cookieName, token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 1000
      ),
      httpOnly: true,
    })
    .json({
      succes: true,
      message,
      user,
      token,
    });
};
