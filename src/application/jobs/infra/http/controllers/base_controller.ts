import * as express from 'express';

export abstract class BaseController {
  // or even private
  protected req: express.Request;
  protected res: express.Response;

  public execute(
    req: express.Request,
    res: express.Response,
    handler: () => void,
  ): void {
    this.req = req;
    this.res = res;
    handler.bind(this)();
  }

  public static jsonResponse(
    res: express.Response,
    code: number,
    message: string,
  ) {
    return res.status(code).json({ message });
  }

  public ok<T>(res: express.Response, dto?: T) {
    if (!!dto) {
      return res.status(200).json(dto);
    } else {
      return res.sendStatus(200);
    }
  }
  public fail(error: Error | string) {
    console.log(error);
    return this.res.status(500).json({
      message: error.toString(),
    });
  }
  public forbidden(message?: string) {
    return BaseController.jsonResponse(
      this.res,
      403,
      message ? message : 'Forbidden',
    );
  }

  public notFound(message?: string) {
    return BaseController.jsonResponse(
      this.res,
      404,
      message ? message : 'Not found',
    );
  }

  public conflict(message?: string) {
    return BaseController.jsonResponse(
      this.res,
      409,
      message ? message : 'Conflict',
    );
  }
  public unauthorized(message?: string) {
    return BaseController.jsonResponse(
      this.res,
      401,
      message ? message : 'Unauthorized',
    );
  }
  public clientError(message?: string) {
    return BaseController.jsonResponse(
      this.res,
      400,
      message ? message : 'Unauthorized',
    );
  }
}
