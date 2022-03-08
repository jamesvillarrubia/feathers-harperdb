var nock = require('nock');
module.exports = function() {
nock.define([
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "insert",
      "schema": "test",
      "table": "books",
      "records": [
        {
          "name": "Doug",
          "age": 32
        }
      ]
    },
    "status": 200,
    "response": {
      "message": "inserted 1 of 1 records",
      "inserted_hashes": [
        "b149d466-3272-4be2-bd34-e162ba98767a"
      ],
      "skipped_hashes": []
    },
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "6.968500003218651",
      "content-length",
      "116",
      "Date",
      "Tue, 08 Mar 2022 23:58:28 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 91
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "search_by_hash",
      "schema": "test",
      "table": "books",
      "hash_values": [
        "b149d466-3272-4be2-bd34-e162ba98767a"
      ],
      "get_attributes": [
        "*"
      ]
    },
    "status": 200,
    "response": [
      {
        "__createdtime__": 1646783908598,
        "__updatedtime__": 1646783908598,
        "age": 32,
        "created": null,
        "id": "b149d466-3272-4be2-bd34-e162ba98767a",
        "name": "Doug"
      }
    ],
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "0.9439000003039837",
      "content-length",
      "149",
      "Date",
      "Tue, 08 Mar 2022 23:58:28 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 140
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "insert",
      "schema": "test",
      "table": "books",
      "records": [
        {
          "name": "Alice",
          "age": 12
        }
      ]
    },
    "status": 200,
    "response": {
      "message": "inserted 1 of 1 records",
      "inserted_hashes": [
        "46d70585-3d2c-4979-be53-0e502a982c0a"
      ],
      "skipped_hashes": []
    },
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "5.027199998497963",
      "content-length",
      "116",
      "Date",
      "Tue, 08 Mar 2022 23:58:28 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 92
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "search_by_hash",
      "schema": "test",
      "table": "books",
      "hash_values": [
        "46d70585-3d2c-4979-be53-0e502a982c0a"
      ],
      "get_attributes": [
        "*"
      ]
    },
    "status": 200,
    "response": [
      {
        "__createdtime__": 1646783908620,
        "__updatedtime__": 1646783908620,
        "age": 12,
        "created": null,
        "id": "46d70585-3d2c-4979-be53-0e502a982c0a",
        "name": "Alice"
      }
    ],
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "5.916500002145767",
      "content-length",
      "150",
      "Date",
      "Tue, 08 Mar 2022 23:58:28 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 140
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "sql",
      "sql": "select books.* from test.books as books where id = '46d70585-3d2c-4979-be53-0e502a982c0a' and ((books.id = 'b149d466-3272-4be2-bd34-e162ba98767a')) order by __createdtime__ asc"
    },
    "status": 200,
    "response": [],
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "7.537799999117851",
      "content-length",
      "2",
      "Date",
      "Tue, 08 Mar 2022 23:58:28 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 204
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "sql",
      "sql": "select books.* from test.books as books where ((books.id = '46d70585-3d2c-4979-be53-0e502a982c0a')) order by __createdtime__ asc"
    },
    "status": 200,
    "response": [
      {
        "created": null,
        "id": "46d70585-3d2c-4979-be53-0e502a982c0a",
        "name": "Alice",
        "__createdtime__": 1646783908620,
        "__updatedtime__": 1646783908620,
        "age": 12
      }
    ],
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "16.429299999028444",
      "content-length",
      "150",
      "Date",
      "Tue, 08 Mar 2022 23:58:28 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 156
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "delete",
      "schema": "test",
      "table": "books",
      "hash_values": [
        "46d70585-3d2c-4979-be53-0e502a982c0a"
      ]
    },
    "status": 200,
    "response": {
      "message": "1 of 1 record successfully deleted",
      "deleted_hashes": [
        "46d70585-3d2c-4979-be53-0e502a982c0a"
      ],
      "skipped_hashes": []
    },
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "10.30460000038147",
      "content-length",
      "126",
      "Date",
      "Tue, 08 Mar 2022 23:58:28 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 109
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "sql",
      "sql": "select books.* from test.books as books where ((books.id = 'b149d466-3272-4be2-bd34-e162ba98767a')) order by __createdtime__ asc"
    },
    "status": 200,
    "response": [
      {
        "created": null,
        "id": "b149d466-3272-4be2-bd34-e162ba98767a",
        "name": "Doug",
        "__createdtime__": 1646783908598,
        "__updatedtime__": 1646783908598,
        "age": 32
      }
    ],
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "9.101700000464916",
      "content-length",
      "149",
      "Date",
      "Tue, 08 Mar 2022 23:58:28 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 156
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "delete",
      "schema": "test",
      "table": "books",
      "hash_values": [
        "b149d466-3272-4be2-bd34-e162ba98767a"
      ]
    },
    "status": 200,
    "response": {
      "message": "1 of 1 record successfully deleted",
      "deleted_hashes": [
        "b149d466-3272-4be2-bd34-e162ba98767a"
      ],
      "skipped_hashes": []
    },
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "5.736099999397993",
      "content-length",
      "126",
      "Date",
      "Tue, 08 Mar 2022 23:58:28 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 109
    },
    "responseIsBinary": false
  }
]);
};