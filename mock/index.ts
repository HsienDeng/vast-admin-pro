export default [
  {
    url: '/api/getCaptchaCode',
    method: 'post',
    response: () => {
      return {
        status: {
          error_code: 0,
          error_msg: 'success',
        },
        data: {
          code_key: '6012e9ba65b442d2e5e7fec6e8eabcfd',
          code: 'scfg',
        },
      };
    },
  },
];
