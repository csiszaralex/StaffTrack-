import { BadRequestException, createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Id = createParamDecorator((_: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  if (!request.params.id) throw new BadRequestException('Id param is required');
  const id = parseInt(request.params.id);
  if (isNaN(id)) throw new BadRequestException('Id must be a number');

  return id;
});
