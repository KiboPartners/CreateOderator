# Create Orderator

Helper scripts to make Create Order Payloads, you can comment out lines to programaticly generate
correct Create Order payloads that will always have totals correct, can use different payment methods,
have tax, etc.

Scroll down to the bottom of the `createOrderLib.ts` to toggle and switch between different settings and options for the order.
 
## Instructions: 
To run, modify the `createOrderLib.ts` file, then call call:
```bash
ts-node createOrderLib.ts | pbcopy
```
Then paste that JSON payload into Postman. 

Credit: Andrew Coles

