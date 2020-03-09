export const success = (res, data) => {
  return res.status(200).json({
    status: true,
    message: 'operation successful',
    data,
  });
};

const error = (res, message: string, errocode: number) => {
  return res.status(errocode).json({
    status: false,
    message,
    data: null,
  });
};

export const error400 = (res, message = 'invalid parameter') =>
  error(res, message, 400);
export const error401 = (res, message = 'unauthorized error') =>
  error(res, message, 401);
export const error404 = (res, message = 'resource not found') =>
  error(res, message, 404);
export const error500 = (res, message = 'server error') =>
  error(res, message, 500);

export class ResponseDto {
  status: boolean;
  message: string;
  data: any;
}
