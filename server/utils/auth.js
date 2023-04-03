import jwt from 'jsonwebtoken'

export const generateJWTAccessToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_ACCESS_TOKEN, {
    expiresIn: '20m',
  })
}
