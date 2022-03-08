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
          "name": "Bob",
          "age": 25
        }
      ]
    },
    "status": 200,
    "response": {
      "message": "inserted 1 of 1 records",
      "inserted_hashes": [
        "aaf2b312-f9a7-412f-a564-942fdf789190"
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
      "5.449500001966953",
      "content-length",
      "116",
      "Date",
      "Tue, 08 Mar 2022 23:58:33 GMT",
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
        "aaf2b312-f9a7-412f-a564-942fdf789190"
      ],
      "get_attributes": [
        "*"
      ]
    },
    "status": 200,
    "response": [
      {
        "__createdtime__": 1646783913401,
        "__updatedtime__": 1646783913401,
        "age": 25,
        "created": null,
        "id": "aaf2b312-f9a7-412f-a564-942fdf789190",
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
      "1.0262000001966953",
      "content-length",
      "148",
      "Date",
      "Tue, 08 Mar 2022 23:58:33 GMT",
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
          "name": "Doug",
          "age": 32
        }
      ]
    },
    "status": 200,
    "response": {
      "message": "inserted 1 of 1 records",
      "inserted_hashes": [
        "e31d9a4e-3a10-42c4-bcac-9aff8d619846"
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
      "4.21229999884963",
      "content-length",
      "116",
      "Date",
      "Tue, 08 Mar 2022 23:58:33 GMT",
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
        "e31d9a4e-3a10-42c4-bcac-9aff8d619846"
      ],
      "get_attributes": [
        "*"
      ]
    },
    "status": 200,
    "response": [
      {
        "__createdtime__": 1646783913421,
        "__updatedtime__": 1646783913421,
        "age": 32,
        "created": null,
        "id": "e31d9a4e-3a10-42c4-bcac-9aff8d619846",
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
      "0.8065000027418137",
      "content-length",
      "149",
      "Date",
      "Tue, 08 Mar 2022 23:58:33 GMT",
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
          "age": 19
        }
      ]
    },
    "status": 200,
    "response": {
      "message": "inserted 1 of 1 records",
      "inserted_hashes": [
        "bae05ba0-3d41-4da5-9ab7-882365f8cf63"
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
      "9.708499997854233",
      "content-length",
      "116",
      "Date",
      "Tue, 08 Mar 2022 23:58:33 GMT",
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
        "bae05ba0-3d41-4da5-9ab7-882365f8cf63"
      ],
      "get_attributes": [
        "*"
      ]
    },
    "status": 200,
    "response": [
      {
        "__createdtime__": 1646783913448,
        "__updatedtime__": 1646783913448,
        "age": 19,
        "created": null,
        "id": "bae05ba0-3d41-4da5-9ab7-882365f8cf63",
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
      "0.9314000010490417",
      "content-length",
      "150",
      "Date",
      "Tue, 08 Mar 2022 23:58:33 GMT",
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
      "sql": "select books.* from test.books as books order by __createdtime__ asc limit 2"
    },
    "status": 200,
    "response": [
      {
        "created": null,
        "id": "aaf2b312-f9a7-412f-a564-942fdf789190",
        "name": "Bob",
        "__createdtime__": 1646783913401,
        "__updatedtime__": 1646783913401,
        "age": 25
      },
      {
        "created": null,
        "id": "e31d9a4e-3a10-42c4-bcac-9aff8d619846",
        "name": "Doug",
        "__createdtime__": 1646783913421,
        "__updatedtime__": 1646783913421,
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
      "7.379599999636412",
      "content-length",
      "296",
      "Date",
      "Tue, 08 Mar 2022 23:58:33 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 104
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "sql",
      "sql": "select books.* from test.books as books where ((books.id = 'aaf2b312-f9a7-412f-a564-942fdf789190')) order by __createdtime__ asc"
    },
    "status": 200,
    "response": [
      {
        "created": null,
        "id": "aaf2b312-f9a7-412f-a564-942fdf789190",
        "name": "Bob",
        "__createdtime__": 1646783913401,
        "__updatedtime__": 1646783913401,
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
      "6.540200002491474",
      "content-length",
      "148",
      "Date",
      "Tue, 08 Mar 2022 23:58:33 GMT",
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
        "aaf2b312-f9a7-412f-a564-942fdf789190"
      ]
    },
    "status": 200,
    "response": {
      "message": "1 of 1 record successfully deleted",
      "deleted_hashes": [
        "aaf2b312-f9a7-412f-a564-942fdf789190"
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
      "6.278300002217293",
      "content-length",
      "126",
      "Date",
      "Tue, 08 Mar 2022 23:58:33 GMT",
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
      "sql": "select books.* from test.books as books where ((books.id = 'bae05ba0-3d41-4da5-9ab7-882365f8cf63')) order by __createdtime__ asc"
    },
    "status": 200,
    "response": [
      {
        "created": null,
        "id": "bae05ba0-3d41-4da5-9ab7-882365f8cf63",
        "name": "Alice",
        "__createdtime__": 1646783913448,
        "__updatedtime__": 1646783913448,
        "age": 19
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
      "8.694499999284744",
      "content-length",
      "150",
      "Date",
      "Tue, 08 Mar 2022 23:58:33 GMT",
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
        "bae05ba0-3d41-4da5-9ab7-882365f8cf63"
      ]
    },
    "status": 200,
    "response": {
      "message": "1 of 1 record successfully deleted",
      "deleted_hashes": [
        "bae05ba0-3d41-4da5-9ab7-882365f8cf63"
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
      "4.9777999967336655",
      "content-length",
      "126",
      "Date",
      "Tue, 08 Mar 2022 23:58:33 GMT",
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
      "sql": "select books.* from test.books as books where ((books.id = 'e31d9a4e-3a10-42c4-bcac-9aff8d619846')) order by __createdtime__ asc"
    },
    "status": 200,
    "response": [
      {
        "created": null,
        "id": "e31d9a4e-3a10-42c4-bcac-9aff8d619846",
        "name": "Doug",
        "__createdtime__": 1646783913421,
        "__updatedtime__": 1646783913421,
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
      "5.533600002527237",
      "content-length",
      "149",
      "Date",
      "Tue, 08 Mar 2022 23:58:33 GMT",
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
        "e31d9a4e-3a10-42c4-bcac-9aff8d619846"
      ]
    },
    "status": 200,
    "response": {
      "message": "1 of 1 record successfully deleted",
      "deleted_hashes": [
        "e31d9a4e-3a10-42c4-bcac-9aff8d619846"
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
      "6.591399997472763",
      "content-length",
      "126",
      "Date",
      "Tue, 08 Mar 2022 23:58:33 GMT",
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