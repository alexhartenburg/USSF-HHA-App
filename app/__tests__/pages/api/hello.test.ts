import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import helloWorldHandler from '../../../pages/api/hello';

describe('API route /hello', () => {
    function mockRequestResponse(method: RequestMethod = 'GET') {
        const {
          req,
          res,
        }: { req: NextApiRequest; res: NextApiResponse } = createMocks({ method });
        req.headers = {
          'Content-Type': 'application/json',
        };
        return { req, res };
    }

    it('should return status 200', async () => {
        const { req, res } = mockRequestResponse();
        await helloWorldHandler(req, res);
        expect(res.statusCode).toBe(200);
    });

    it('should return JSON message: Hello World', async () => {
        const { req, res } = mockRequestResponse();
        await helloWorldHandler(req, res);

// *** This bothers me. There doesn't seem to be type data for NextApiResponse, so TS throws an error on the ._getJSONData() function
        expect(res._getJSONData()).toEqual({ message: 'Hello World' });
    });

})

