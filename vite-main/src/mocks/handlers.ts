import { rest } from 'msw';
const todos = ['먹기', '밍재님놀리기', '밥먹기', '공부하기'];

export const handlers = [
  //할일 목록
  rest.get('/todos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1000), ctx.json(todos));
  }),
  // 할일 추가
  rest.post<string>('/todos', (req, res, ctx) => {
    todos.push(req.body);
    return res(ctx.status(201));
  }),
];

export default handlers;
