
import { Order, Contact, CommerceRuntimeOrderItem} from '@kibocommerce/rest-sdk/clients/Commerce/'

// https://playcode.io/1796561
/** For if you paste into a JS fiddle site for people without TypeScript local setup */
const copyToCliboard = (text: string) => {
  var document = (globalThis as any).document as any
  if (document) {
    const button = document.createElement('button');
    button.innerText = "Copy me!";

    // Add a click event listener to the button
    button.addEventListener('click', function () {
      // Create a new textarea element
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);

      // Select the text in the textarea
      textarea.select();
      document.execCommand('copy');

      // Remove the textarea element
      document.body.removeChild(textarea);
    });

    // Append the button to the body
    document.body.appendChild(button);
  }
}

const itemLibrary: { [key: string]: CommerceRuntimeOrderItem } = {
  tent: {
    productDiscounts: [],
    product: {
      imageUrl: "https://cdn-sb.mozu.com/26507-41309/cms/41309/files/c6fe321c-55fe-42e3-9b38-180793d3d321",
      price: { price: 259 },
      productCode: "Tent_010",
      name: "Rattlesnake Tent",
      description: "Rattlesnake Tent",
    }
  },
  cheese: {
    productDiscounts: [],
    product: {
      imageUrl: "https://d3bca3vmgp4vu9.cloudfront.net/17813-22093/cms/22093/files/d654c18d-c2eb-4bc3-9442-b0e932bf9c6e",
      price: { price: 5.99 },
      productCode: "CH01",
      name: "Cheese",
      description: "Cheese",
    }
  },
  headphones: {
    productDiscounts: [],
    product: {
      imageUrl: "https://cdn-sb.mozu.com/30248-50433/cms/50433/files/cf9cfdae-3df3-4bc8-a1c8-4a7272481729",
      price: { price: 10.0 },
      productCode: "UPC1",
      name: "Cool Headphones",
      description: "Wireless Headphones",
    }
  },
  fireAnts: {
    productDiscounts: [],
    product: {
      imageUrl: "https://cdn-sb.mozu.com/42345-m1/cms/files/091ba1d9-20cf-4ced-b198-c2604ad58ab8",
      price: { price: 30.0 },
      productCode: "UPC-Ants",
      name: "Fire Ant Colony Starter Kit",
      description: "The New Colony Starter Kit empowers you to establish a robust and self-sustaining colony that competes with and displaces the native ant populations",
      isPackagedStandAlone: false
    }
  },
  test666: {
    "fulfillmentLocationCode": "49011490",
    "fulfillmentMethod": "Ship",
    "isReservationEnabled": false,
    "lineId": 1,
    "product": {
      "fulfillmentTypesSupported": [
        "DirectShip"
      ],
      "options": [],
      "properties": [
        {
          "attributeFQN": "tenant~istweezermen",
          "name": "isTweezermen",
          "dataType": "Bool",
          "isMultiValue": false,
          "values": [
            {
              "value": false
            }
          ]
        },
        {
          "attributeFQN": "tenant~iswayfair",
          "name": "isWayfair",
          "dataType": "Bool",
          "isMultiValue": false,
          "values": [
            {
              "value": false
            }
          ]
        },
        {
          "attributeFQN": "tenant~isindigo",
          "name": "isIndigo",
          "dataType": "Bool",
          "isMultiValue": false,
          "values": [
            {
              "value": false
            }
          ]
        },
        {
          "attributeFQN": "tenant~tsc",
          "name": "The Shopping channel",
          "dataType": "Bool",
          "isMultiValue": false,
          "values": [
            {
              "value": false
            }
          ]
        },
        {
          "attributeFQN": "system~substitute-products",
          "name": "Substitute Products",
          "dataType": "String",
          "isMultiValue": false,
          "values": [
            {
              "stringValue": "66600-",
              "value": "66600-"
            }
          ]
        }
      ],
      "categories": [],
      "price": {
        "price": 0
      },
      "discountsRestricted": false,
      "isTaxable": true,
      "productType": "Standard",
      "productUsage": "Standard",
      "bundledProducts": [],
      "productCode": "test666",
      "name": "testfr",
      "goodsType": "Physical",
      "isPackagedStandAlone": false,
      "stock": {
        "manageStock": true,
        "isOnBackOrder": false,
        "stockAvailable": 30,
        "aggregateInventory": 0,
        "isSubstitutable": true
      },
      "measurements": {
        "height": {
          "unit": "in",
          "value": 1.000
        },
        "width": {
          "unit": "in",
          "value": 1.000
        },
        "length": {
          "unit": "in",
          "value": 1.000
        },
        "weight": {
          "unit": "lbs",
          "value": 1.000
        }
      },
      "fulfillmentStatus": "PendingFulfillment"
    },
    "quantity": 1,
    "subtotal": 0,
    "extendedTotal": 0,
    "taxableTotal": 0,
    "discountTotal": 0,
    "discountedTotal": 0,
    "itemTaxTotal": 0,
    "shippingTaxTotal": 0,
    "shippingTotal": 0,
    "feeTotal": 0,
    "total": 0,
    "unitPrice": {
      "extendedAmount": 0,
      "listAmount": 0
    },
    "productDiscounts": [],
    "shippingDiscounts": [],
    "shippingAmountBeforeDiscountsAndAdjustments": 0,
    "weightedOrderAdjustment": 0,
    "weightedOrderDiscount": 0.00,
    "adjustedLineItemSubtotal": 0.0000,
    "totalWithoutWeightedShippingAndHandling": 0.0000,
    "weightedOrderTax": 0.00,
    "weightedOrderShipping": 6.99,
    "weightedOrderShippingDiscount": 0.00,
    "weightedOrderShippingManualAdjustment": 0.00,
    "weightedOrderShippingTax": 0.00,
    "weightedOrderHandlingFee": 0.00,
    "weightedOrderHandlingFeeTax": 0.00,
    "weightedOrderHandlingFeeDiscount": 0.00,
    "weightedOrderDuty": 0.00,
    "totalWithWeightedShippingAndHandling": 6.9900,
    "weightedOrderHandlingAdjustment": 0,
    "isAssemblyRequired": false,
    "inventoryTags": []
  },
  shrimp: {
    productDiscounts: [],

    product: {
      imageUrl: "https://cdn-sb.mozu.com/42345-m1/cms/files/d0cc188f-49df-4174-8139-7f3343770ac6",
      price: { price: 1 },
      productCode: "shrimp",
      name: "Shrimp",
      productType: "Default",
      productUsage: "Standard",
      description: "Shrimp (NOT FOR EATING), looking for a loving home.",
      isPackagedStandAlone: false,
      stock: {
        manageStock: false,
        isOnBackOrder: false,
        isSubstitutable: true
      },
      properties: [
        {
          attributeFQN: "system~substitute-products",
          name: "Substitute Products",
          dataType: "String",
          isMultiValue: false,
          values: [{
            value: "shrimp_mini",
            stringValue: "shrimp_mini"
          }]
        }
      ]
    }
  },
  shrimp_mini: {
    productDiscounts: [],
    product: {
      imageUrl: "https://cdn-sb.mozu.com/42345-m1/cms/files/61d05781-f7d2-4f21-83af-468ef4268947",
      price: { price: 1 },
      stock: {
        manageStock: true,
        isSubstitutable: true
      },
      productCode: "shrimp_mini",
      name: "Shrimp (miniature)",
      description: "Shrimp (ONCE AGAIN NOT FOR EATING). Plays well with other shrimp and great for your aquarium.",
      isPackagedStandAlone: false,
      properties: [
        {
          attributeFQN: "system~substitute-products",
          name: "Substitute Products",
          dataType: "String",
          isMultiValue: false,
          values: [{
            value: "shrimp_mini",
            stringValue: "shrimp_mini"
          }]
        }
      ]
    }
  },
  fauxWrapLarge: {
    productDiscounts: [],
    product: {
      sku: "75912717",
      imageUrl: "https://donna-karan-giii.myshopify.com/cdn/shop/files/DKDK02523_61_D4SHT820_CRM_B_2f938772-a7f7-4a41-ac9a-e188a3fad517.jpg?v=1706038526&width=100",
      price: { price: 89.0 },
      productCode: "75912717",
      name: "TIE WAIST FAUX WRAP - Black - L\nColor: \nSize: \nStyle: ",
      description: "TIE WAIST FAUX WRAP - Black - L",
    }
  },
  fauxWrapMedium: {
    productDiscounts: [],
    product: {
      sku: "75912709",
      imageUrl: "https://donna-karan-giii.myshopify.com/cdn/shop/files/DKDK02523_61_D4SHT820_CRM_B_2f938772-a7f7-4a41-ac9a-e188a3fad517.jpg?v=1706038526&width=100",
      price: { price: 79.0 },
      productCode: "75912709",
      name: "TIE WAIST FAUX WRAP - Black - M\nColor: \nSize: \nStyle: ",
      description: "TIE WAIST FAUX WRAP - Black - M",
    }
  },
  hewlettCrossbody: {
    productDiscounts: [],
    product: {
      sku: "75912709",
      imageUrl: "https://donna-karan-giii.myshopify.com/cdn/shop/files/DKDK02523_61_D4SHT820_CRM_B_2f938772-a7f7-4a41-ac9a-e188a3fad517.jpg?v=1706038526&width=100",
      price: { price: 238.0 },
      productCode: "75908491",
      name: "HEWLETT CROSSBODY - Black/Gold / One Size\nColor: \nSize: \nStyle: ",
      description: "HEWLETT CROSSBODY - Black/Gold / One Size",
    }
  },
  soHelsinki: {
    productDiscounts: [],
    product: {
      imageUrl: "",
      price: { price: 24.99 },
      productCode: "SO-Helsinki",
      name: " Of the United Status",
      description: "Of the United Status",
      stock: {
        manageStock: true
      }
    },
  }
}

class OrderBuilder {
  order: Order
  now: Date

  constructor() {
    this.now = (new Date())
    this.order = {
      channelCode: "Online",
      externalId: this.now.getTime().toString(),
      isTaxExempt: false,
      status: "Accepted",
      type: "Online",
      isImport: true,
      amountRefunded: 0,
      currencyCode: "USD",
    }
  }

  propagateEmail(email: string): OrderBuilder {
    this.order.email = email
    if (this.order.fulfillmentInfo?.fulfillmentContact) {
      this.order.fulfillmentInfo.fulfillmentContact.email = email
    }
    if (this.order.billingInfo?.billingContact) {
      this.order.billingInfo.billingContact.email = email
    }
    return this
  }

  recalculateItemLineIds(): OrderBuilder {
    for (let i = 0; i < (this.order.items?.length || 0); i++) {
      if (this.order.items?.[i]) {
        this.order.items[i].lineId = i + 1
      }
    }
    return this
  }

  addValidationResults(): OrderBuilder {
    this.order.validationResults = this.order.validationResults || []
    this.order.validationResults.push(
      {
        validationId: "3eca9d6a-6e90-49dd-8b4c-43d6cf9da123",
        validatorName: "Test Validator",
        validatorType: "Fraud",
        status: "Review",
        createdDate: this.now.toISOString(),
        messages: [
          {
            messageType: "fraudResult",
            message: "Review"
          }
        ]
      })
    return this
  }

  addShippingDiscount(): OrderBuilder {
    this.order.shippingDiscounts = this.order.shippingDiscounts || []
    this.order.shippingDiscounts.push(
      {
        methodCode: "ST",
        discount: {
          impact: 6.95,
          discount: {
            id: 84,
            name: "You have received $5 standard shipping on your order!",
            expirationDate: new Date("2024-02-05T10:30:00.000Z").toISOString(),
            hasMultipleTargetProducts: false
          },
          couponCode: "FIVE",
          excluded: false
        }
      }
    )
    return this
  }

  addItem(args: { item: keyof typeof itemLibrary, quantity: number, fulfillmentMethod: 'Ship' | 'Pickup' | 'Digital' | 'Curbside' | 'Delivery', fulfillmentLocationCode?: string | undefined, price?: number, salePrice?: number }): OrderBuilder {
    this.order.items = this.order.items || []
    const newItem = JSON.parse(JSON.stringify(itemLibrary[args.item])) as CommerceRuntimeOrderItem
    newItem.quantity = args.quantity
    if (args.price && newItem.product?.price) {
      newItem.product.price.price = args.price
      newItem.product.price.salePrice = args.salePrice
    }
    newItem.fulfillmentMethod = args.fulfillmentMethod
    newItem.fulfillmentLocationCode = args.fulfillmentLocationCode
    if (newItem.product) {
      newItem.product.options = newItem.product.options || []
      newItem.product.properties = newItem.product.properties || []
      newItem.product.isPackagedStandAlone = newItem.product.isPackagedStandAlone || false
      newItem.product.goodsType = newItem.product.goodsType || "Physical"
      // Leaving off measurements could cause issues with tax and order valiation
      newItem.product.measurements = {
        height: {
          unit: "in",
          value: 1.0
        },
        width: {
          unit: "in",
          value: 1.0
        },
        length: {
          unit: "in",
          value: 1.0
        },
        weight: {
          unit: "lbs",
          value: 1.0
        }
      }
    }
    this.order.items.push(newItem)
    this.recalculateItemLineIds()
    return this
  }

  addRandomNumberOfItems(): OrderBuilder {
    function deleteRandomElements(arr: Array<string>, n: number) {
      if (arr.length <= n) {
        return arr; // Nothing to delete
      }

      // Calculate the number of elements to delete
      const numToDelete = arr.length - n;

      for (let i = 0; i < numToDelete; i++) {
        // Generate a random index to delete
        const randomIndex = Math.floor(Math.random() * arr.length);

        // Delete the element at the random index
        arr.splice(randomIndex, 1);
      }

      return arr;
    }



    const numItems = Number(Number(Math.random() * 3 + 2).toFixed(0))
    var itemKeys = Object.keys(itemLibrary)

    itemKeys = deleteRandomElements(itemKeys, numItems)
    for (let i = 0; i < itemKeys.length; i++) {
      this.addItem({
        item: itemKeys[i],
        quantity: Number(Number(Math.random() * 5 + 1).toFixed(0)),
        fulfillmentMethod: 'Ship'
      })
    }
    return this
  }

  addTenPercentTax(): OrderBuilder {
    const taxRate = 0.1
    for (let item of this.order.items || []) {
      const itemTotal = (item.product?.price?.tenantOverridePrice || item.product?.price?.salePrice || item.product?.price?.price || 0) * (item.quantity || 0)
      item.isTaxable = true
      item.itemTaxTotal = Number((itemTotal * taxRate).toFixed(2))
    }
    this.order.shippingTaxTotal = Number(((this.order.shippingTotal || 0) * taxRate).toFixed(2))
    return this
  }

  spread(total: number, count: number): Array<number> {
    let results: Array<number> = []
    const amountPerItem = Number((total / count).toFixed(2))
    for (let i = 0; i < count; i++) {
      // Take into account penny rounding, put the extra cent in the first payment
      results.push(Number((i == 0 ? amountPerItem + (total - (amountPerItem * count)) : amountPerItem).toFixed(2)))
    }
    return results
  }

  spreadWithWeightings(total: number, weightings: Array<number>): Array<number> {
    if (weightings.length == 0) {
      return []
    }
    const totalWeight = weightings.reduce((acc, curr) => acc +curr, 0)
    console.log('totalWeight', totalWeight)
    let results: Array<number> = []
  
    for (let i = 0; i < weightings.length; i++) {
      const amountPerItem = Number((total * weightings[i] / totalWeight).toFixed(2))
      results.push(Number(amountPerItem.toFixed(2)))
    }
  
    const resultingWeight = results.reduce((acc, curr) => acc +curr, 0)
    results[0] = results[0] + total - resultingWeight
  
    return results
  }

  recalculateTotals(): OrderBuilder {

    let total = 0

    // Here we distribute the shipping tax into the order. We assume that itemTaxTotal is already set when adding taxes
    const itemShipping = this.spread(this.order.shippingTotal || 0, this.order.items?.length || 1)
    const itemTax = this.spread(this.order.shippingTaxTotal || 0, this.order.items?.length || 1)
    this.order.items?.forEach((i, idx) => {
      i.shippingTaxTotal = itemTax[idx]
      i.shippingTotal = itemShipping[idx]
    })

    for (let item of this.order.items || []) {
      var itemSubTotal = 0
      var itemSubTotalPerEach = item.product?.price?.tenantOverridePrice || item.product?.price?.salePrice || item.product?.price?.price || 0
      itemSubTotal += itemSubTotalPerEach * (item.quantity || 0)
      itemSubTotal -= item.discountTotal || 0
      itemSubTotal += item.itemTaxTotal || 0
      itemSubTotal += item.shippingTotal || 0
      itemSubTotal += item.shippingTaxTotal || 0
      itemSubTotal += item.handlingAmount || 0
      itemSubTotal -= item.weightedOrderHandlingFeeDiscount || 0
      itemSubTotal += item.weightedOrderHandlingFeeTax || 0
      itemSubTotal += item.dutyAmount || 0
      item.total = Number(itemSubTotal.toFixed(2))
      // Need this or could cause issues showing shipments on historical orders
      item.unitPrice = {
        listAmount: itemSubTotalPerEach,
        extendedAmount: itemSubTotalPerEach
      }
      total += itemSubTotal
    }

    this.order.total = Number(total.toFixed(2))


    return this
  }


  peanutButterSpreadPaymentTotals(): OrderBuilder {
    const total = this.order.total || 0
    const numPayments = this.order.payments?.length || 1
    const amountPerPayment = Number((total / numPayments).toFixed(2))
    for (let i = 0; i < numPayments; i++) {
      // Take into account penny rounding, put the extra cent in the first payment
      let actualAmountPerPayment = Number((i == 0 ? amountPerPayment + (total - (amountPerPayment * numPayments)) : amountPerPayment).toFixed(2))
      if (this.order.payments?.[i]) {
        this.order.payments[i].amountRequested = actualAmountPerPayment
        const authorizationInteraction = this.order.payments[i].interactions?.find(i => i.interactionType == "Authorization")
        if (authorizationInteraction) {
          authorizationInteraction.amount = actualAmountPerPayment
        }
        const captureInteraction = this.order.payments[i].interactions?.find(i => i.interactionType == "Capture")
        if (captureInteraction) {
          captureInteraction.amount = actualAmountPerPayment
        }
        if (this.order.payments[i].status == "Collected") {
          this.order.payments[i].amountCollected = actualAmountPerPayment
        }
      }
    }
    return this
  }

  addNote(note: string): OrderBuilder {
    this.order.notes = this.order.notes || []
    this.order.notes.push({ text: note })
    return this
  }

  addAttribute(fqn: string, value: string): OrderBuilder {
    this.order.attributes = this.order.attributes || []
    this.order.attributes.push({
      fullyQualifiedName: fqn,
      values: [
        value
      ]
    })
    return this
  }




  modifyOrder(callback: (order: Order) => Order): OrderBuilder {
    this.order = callback(this.order)
    return this
  }

  addCheckPayment(contact: Contact): OrderBuilder {
    this.order.payments = this.order.payments || []
    this.order.payments.push({
      paymentType: "Check",
      paymentWorkflow: "Mozu",
      billingInfo: {
        paymentType: "Check",
        paymentWorkflow: "Mozu",
        billingContact: contact,
        isSameBillingShippingAddress: true,
      },
      status: "Pending",
      interactions: [
        {
          currencyCode: "USD",
          interactionType: "RequestCheck",
          status: "CheckRequested",
          paymentEntryStatus: "New",
          isRecurring: false,
          isManual: false,
          interactionDate: this.now.toISOString(),
          gatewayResponseText: "Check requested"
          ,gatewayResponseData: []
        }
      ],
      isRecurring: false,
      amountCollected: 0,
      amountCredited: 0,
      changeMessages: []
    })
    return this
  }

  addCreditCardPayment(contact: Contact): OrderBuilder {
    this.order.payments = this.order.payments || []
    this.order.payments.push({
      paymentType: "CreditCard",
      paymentWorkflow: "Mozu",
      billingInfo: {
        paymentType: "CreditCard",
        paymentWorkflow: "Mozu",
        billingContact: contact,
        isSameBillingShippingAddress: true,
        card: {
          isUsedRecurring: false,
          nameOnCard: contact.firstName,
          isCardInfoSaved: false,
          paymentOrCardType: "VISA",
          cardNumberPartOrMask: "4111111111111111",
          isTokenized: true,
          expireMonth: 12,
          expireYear: 2030
        }
      },
      status: "Authorized",
      interactions: [
        {
          currencyCode: "USD",
          interactionType: "Authorization",
          status: "Authorized",
          paymentEntryStatus: "New",
          gatewayResponseText: "Authorized",
          isRecurring: false,
          isManual: false,
          interactionDate: this.now.toISOString(),
          gatewayResponseData: []
        }
      ],
      isRecurring: false,
      amountCollected: 0,
      amountCredited: 0,
      changeMessages: []
    })
    return this
  }

  addGiftCardPayment(contact: Contact): OrderBuilder {
    this.order.payments = this.order.payments || []
    this.order.payments.push({
      paymentType: "GiftCard",
      paymentWorkflow: "Mozu",
      billingInfo: {
        paymentType: "GiftCard",
        paymentWorkflow: "Mozu",
        billingContact: contact,
        isSameBillingShippingAddress: true,
        card: {
          isUsedRecurring: false,
          nameOnCard: contact.firstName,
          isCardInfoSaved: false,
          paymentOrCardType: "GIFTCARD",
          cardNumberPartOrMask: "4111111111111111",
          isTokenized: true,
          expireMonth: 0,
          expireYear: 0
        }
      },
      status: "Collected",
      interactions: [
        {
          currencyCode: "USD",
          interactionType: "AuthorizeAndCapture",
          status: "Captured",
          paymentEntryStatus: "New",
          isRecurring: false,
          isManual: false,
          interactionDate: this.now.toISOString()
        }
      ],
      isRecurring: false,
      amountCollected: 0,
      amountCredited: 0,
      changeMessages: []
    })
    return this
  }

  beOkWithNoPayment(): OrderBuilder {
    this.order.payments = this.order.payments || []
    this.order.type = "Offline"
    return this
  }


  addThirdPartyPayment(contact: Contact, args: { workflowName: string }): OrderBuilder {
    this.order.payments = this.order.payments || []
    this.order.payments.push({
      paymentType: args.workflowName,
      paymentWorkflow: args.workflowName,
      billingInfo: {
        paymentType: args.workflowName,
        paymentWorkflow: args.workflowName,
        billingContact: contact,
        isSameBillingShippingAddress: true,
      },
      status: "Authorized",
      interactions: [
        {
          currencyCode: "USD",
          interactionType: "Authorization",
          status: "Authorized",
          paymentEntryStatus: "New",
          gatewayResponseText: "Authorized",
          gatewayCVV2Codes: "001",
          gatewayAVSCodes: "002",
          isRecurring: false,
          isManual: false,
          interactionDate: this.now.toISOString()
        }
      ],
      isRecurring: false,
      amountCollected: 0,
      amountCredited: 0,
      changeMessages: []
    })
    return this
  }

  addThirdPartyPaymentPaid(contact: Contact, args: { workflowName: string }): OrderBuilder {
    this.order.payments = this.order.payments || []
    this.order.payments.push({
      paymentType: args.workflowName,
      paymentWorkflow: args.workflowName,
      billingInfo: {
        paymentType: args.workflowName,
        paymentWorkflow: args.workflowName,
        billingContact: contact,
        isSameBillingShippingAddress: true,
      },
      status: "Collected",
      interactions: [
        {
          currencyCode: "USD",
          interactionType: "Authorization",
          status: "Authorized",
          paymentEntryStatus: "New",
          gatewayResponseText: "Authorized",
          gatewayCVV2Codes: "001",
          gatewayAVSCodes: "002",
          isRecurring: false,
          isManual: false,
          interactionDate: this.now.toISOString()
        },
        {
          interactionType: "Capture",
          status: "Captured",
          paymentEntryStatus: "Authorized",
          isRecurring: false,
          isManual: false,
          gatewayResponseCode: "201",
          gatewayResponseText: "Captured via NoOp",
          amount: 4.11,
          interactionDate: this.now.toISOString(),
      }
      ],
      isRecurring: false,
      amountCollected: 0,
      amountCredited: 0,
      changeMessages: []
    })
    return this
  }

  changeCurrencyCode(currencyCode: string): OrderBuilder {
    this.order.currencyCode = "AUD"
    this.order.payments?.forEach(p => {
      p.interactions?.forEach(i => {
        i.currencyCode = currencyCode
        // i.gatewayResponseText = `${i.gatewayResponseText} $${i.amount} ${currencyCode}`
      })
    })
    return this
  }


  buildFlatRateShipping(args: { flatrateAmount: number }): OrderBuilder {
    /// {{baseUrl}}/commerce/shipping/admin/carriers
    if (this.order.fulfillmentInfo) {
      this.order.fulfillmentInfo.shippingMethodCode = "Standard",
      this.order.fulfillmentInfo.shippingMethodName = "Standard"
    }
    this.order.shippingTotal = args.flatrateAmount
    this.order.shippingSubTotal = args.flatrateAmount
    return this
  }

  buildFulfillmentInfo(contact: Contact): OrderBuilder {
    const newContact = JSON.parse(JSON.stringify(contact)) as Contact
    this.order.fulfillmentInfo = {
      fulfillmentContact: contact,
      // Need shippingMethodName and shippingMethodCode
    }
    return this
  }

  buildBillingInfo(contact: Contact): OrderBuilder {
    const newContact = JSON.parse(JSON.stringify(contact)) as Contact
    this.order.billingInfo = {
      billingContact: contact,
      // Need shippingMethodName and shippingMethodCode
    }
    return this
  }

  getPayload(): Order {
    return this.order
  }

  markAllItemsAsDigital(): OrderBuilder {
    this.order.items?.forEach(i => {
      if (i?.product?.goodsType) {
        i.product.goodsType = "Digital"
      }
      i.fulfillmentLocationCode = "homebase"
      i.fulfillmentMethod = "Digital"
    })
    return this
  }

  markAllItemsAsDigitalGiftCard(): OrderBuilder {
    this.order.items?.forEach(i => {
      if (i?.product?.goodsType) {
        i.product.goodsType = "DigitalGiftCard"
      }
      i.fulfillmentLocationCode = "homebase"
      i.fulfillmentMethod = "Digital"
    })
    return this
  }
}


const jordanRomeroContact = {
  firstName: "Jordan",
  lastNameOrSurname: "Romero",
  phoneNumbers: {
    home: "1231231234"
  },
  address: {
    address1: "717 N HARWOOD ST",
    cityOrTown: "Dallas",
    stateOrProvince: "TX",
    postalOrZipCode: "75201",
    countryCode: "US",
    addressType: "Residential",
    isValidated: true
  }
}

const andyKalesContact = {
  firstName: "Andy",
  lastNameOrSurname: "Kales",
  phoneNumbers: {
    home: "1231231234"
  },
  address: {
    address1: "1234 Fake St",
    cityOrTown: "Dallas",
    stateOrProvince: "TX",
    postalOrZipCode: "75204",
    countryCode: "US",
    addressType: "Residential",
    isValidated: true
  }
}

const andyKalesAustraliaContact = {
  firstName: "Andy",
  lastNameOrSurname: "Kales",
  phoneNumbers: {
    home: "+61754300000"
  },
  address: {
    address1: "70/98 Dalton Dr",
    cityOrTown: "Maroochydore",
    stateOrProvince: "QLD",
    postalOrZipCode: "4558",
    countryCode: "AU",
    addressType: "Residential",
    isValidated: true
  }
}

const ancientContact = {
  firstName: "𒄿𒊏𒄿",
  lastNameOrSurname: "𒀭𒈠𒁊𒂀𒀜",
  phoneNumbers: {
    home: "4448282482"
  },
  address: {
    address1: "𒈷𒄿𒉿𒊑",
    cityOrTown: "𒀀𒀀𒅗𒍩𒈨𒋾",
    stateOrProvince: "𒈠𒂀𒅖𒄿𒉿𒊑",
    postalOrZipCode: "75204",
    countryCode: "US",
    addressType: "Residential",
    isValidated: true
  }
}

const sitContact = {
  firstName: "SIT1",
  lastNameOrSurname: "SIT1",
  phoneNumbers: {
    home: "1112223333"
  },
  address: {
    address1: "6679 Topper Parkway",
    cityOrTown: "San Antonia",
    stateOrProvince: "TX",
    postalOrZipCode: "78233",
    countryCode: "US",
    addressType: "Residential",
    isValidated: true
  }
}

const defaultContact = jordanRomeroContact


const myOrder =
  new OrderBuilder()
    .buildFulfillmentInfo(sitContact)
    .buildBillingInfo(sitContact)

    // Payments
    .addCreditCardPayment(sitContact)
    //.addGiftCardPayment(defaultContact)
    //.addCheckPayment(defaultContact)
    // .addThirdPartyPaymentPaid(defaultContact, { workflowName: "NoOp3rdParty" })
    //.addGiftCardPayment(defaultContact)
    //.beOkWithNoPayment()
    // .addItem({ item: "headphones", quantity: 3, fulfillmentMethod: "Ship", price: 21.5 })
    .addItem({ item: "soHelsinki", quantity: 1, fulfillmentMethod: "Ship"})
    //.addRandomNumberOfItems()

    // Shipping
    .buildFlatRateShipping({flatrateAmount: 15})

    //.addTenPercentTax()
    .propagateEmail("sit1@test.com")
    .recalculateTotals()
    .peanutButterSpreadPaymentTotals()
    //.addAttribute("tenant~test", "Hi")
    .modifyOrder(o => {
      o.data = {
        // Note: Only use this for testing in sandbox
        BypassOrderQueue: true
      }
      // You can also do things like arbitrarily modify the order here
      o.externalId = undefined
      return o
    })

console.log(JSON.stringify(myOrder.order, null, 2))
copyToCliboard(JSON.stringify(myOrder.order, null, 2))
