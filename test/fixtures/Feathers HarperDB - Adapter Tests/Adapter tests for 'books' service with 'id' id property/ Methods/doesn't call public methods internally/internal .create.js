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
        "fb15eb1d-e62c-4ce4-9a87-1c3d76d70ee8"
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
      "5.410099998116493",
      "content-length",
      "116",
      "Date",
      "Tue, 08 Mar 2022 23:58:31 GMT",
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
        "fb15eb1d-e62c-4ce4-9a87-1c3d76d70ee8"
      ],
      "get_attributes": [
        "*"
      ]
    },
    "status": 200,
    "response": [
      {
        "__createdtime__": 1646783911290,
        "__updatedtime__": 1646783911290,
        "age": 32,
        "created": null,
        "id": "fb15eb1d-e62c-4ce4-9a87-1c3d76d70ee8",
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
      "0.982599999755621",
      "content-length",
      "149",
      "Date",
      "Tue, 08 Mar 2022 23:58:31 GMT",
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
          "name": "Bob",
          "age": 25
        }
      ]
    },
    "status": 200,
    "response": {
      "message": "inserted 1 of 1 records",
      "inserted_hashes": [
        "4837fcb4-aa26-475f-b005-04d7d6e7bd2d"
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
      "5.012499999254942",
      "content-length",
      "116",
      "Date",
      "Tue, 08 Mar 2022 23:58:31 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 90
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
        "4837fcb4-aa26-475f-b005-04d7d6e7bd2d"
      ],
      "get_attributes": [
        "*"
      ]
    },
    "status": 200,
    "response": [
      {
        "__createdtime__": 1646783911312,
        "__updatedtime__": 1646783911312,
        "age": 25,
        "created": null,
        "id": "4837fcb4-aa26-475f-b005-04d7d6e7bd2d",
        "name": "Bob"
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
      "0.8995000012218952",
      "content-length",
      "148",
      "Date",
      "Tue, 08 Mar 2022 23:58:31 GMT",
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
      "sql": "select books.* from test.books as books where ((books.id = '4837fcb4-aa26-475f-b005-04d7d6e7bd2d')) order by __createdtime__ asc"
    },
    "status": 200,
    "response": [
      {
        "created": null,
        "id": "4837fcb4-aa26-475f-b005-04d7d6e7bd2d",
        "name": "Bob",
        "__createdtime__": 1646783911312,
        "__updatedtime__": 1646783911312,
        "age": 25
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
      "6.849500000476837",
      "content-length",
      "148",
      "Date",
      "Tue, 08 Mar 2022 23:58:31 GMT",
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
        "4837fcb4-aa26-475f-b005-04d7d6e7bd2d"
      ]
    },
    "status": 200,
    "response": {
      "message": "1 of 1 record successfully deleted",
      "deleted_hashes": [
        "4837fcb4-aa26-475f-b005-04d7d6e7bd2d"
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
      "5.637700002640486",
      "content-length",
      "126",
      "Date",
      "Tue, 08 Mar 2022 23:58:31 GMT",
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
      "sql": "select books.* from test.books as books where ((books.id = 'fb15eb1d-e62c-4ce4-9a87-1c3d76d70ee8')) order by __createdtime__ asc"
    },
    "status": 200,
    "response": [
      {
        "created": null,
        "id": "fb15eb1d-e62c-4ce4-9a87-1c3d76d70ee8",
        "name": "Doug",
        "__createdtime__": 1646783911290,
        "__updatedtime__": 1646783911290,
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
      "6.126800000667572",
      "content-length",
      "149",
      "Date",
      "Tue, 08 Mar 2022 23:58:31 GMT",
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
        "fb15eb1d-e62c-4ce4-9a87-1c3d76d70ee8"
      ]
    },
    "status": 200,
    "response": {
      "message": "1 of 1 record successfully deleted",
      "deleted_hashes": [
        "fb15eb1d-e62c-4ce4-9a87-1c3d76d70ee8"
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
      "5.765500001609325",
      "content-length",
      "126",
      "Date",
      "Tue, 08 Mar 2022 23:58:31 GMT",
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