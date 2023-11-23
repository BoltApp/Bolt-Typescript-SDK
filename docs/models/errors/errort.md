# ErrorT

An error has occurred, and further details are contained in the response


## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `dotTag`                                                                                                | [errors.DotTag](../../models/errors/dottag.md)                                                          | :heavy_check_mark:                                                                                      | The type of error returned                                                                              | not_found                                                                                               |
| `message`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | A human-readable error message, which might include information specific to<br/>the request that was made.<br/> | The resource does not exist                                                                             |