<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</h1>

<h3 align="center">
  Challenge 3: FastFeet, continuing the application
</h3>

<h3 align="center">
  :warning: Stage 2/4 of the Final Challenge :warning:
</h3>

## :rocket: About the challenge

During this challenge we will enhance the FastFeet application that we started in the previous challenge by implementing features that we have learned during classes so far.

### **Administrator Features**

Below are described the features you should add in your application for administrators.

### **1. Delivery management**

Allow the administrator to register couriers for the platform, the courier must have the following fields:

- id (deliverer id)
- name (name of deliverer);
- avatar_id (picture of the delivery man);
- email (delivery man's email)
- created_at;
- updated_at;

Create routes for list/registration/update/delivery removal;

Note: This feature is for authenticated administrators in the application.

### **2. Order management**

Although the delivery man is registered, he is not independent within the platform, and you must register orders for the delivery men.

In this feature we will create a register of orders per deliverer, the order has the fields:

- id (delivery id)
- recipient_id (recipient reference);
- deliveryman_id (reference to the deliverer);
- signature_id (reference to a signature of the recipient, which will be an image);
- product (name of the product to be delivered);
- canceled_at (cancellation date, if cancelled);
- start_date (date of withdrawal of the product);
- end_date (final delivery date);
- created_at;
- updated_at;

The **start date** must be registered as soon as the product is picked up by the deliverer, and pickups can only be made between 08:00 and 18:00.

The **end date** of the delivery must be registered when the deliverer finishes the delivery:

The fields **recipient_id** and **deliveryman_id** must be registered when the order is registered.

When the order is **registered** for a deliveryman, the deliveryman receives an email with order details, with product name and a message informing him that the product is already available for withdrawal.

Create routes to list/registration/update/removal of orders;

Note: This feature is for administrators authenticated in the application.

### **Delivery features**

Below are described the features you should add in your application for the deliverers.

### **1. View Orders**

In order for the deliverer to be able to view your orders, he must only inform your registration ID (deliverer ID in the database). This functionality must return the orders assigned to him, which are **not delivered or cancelled**;

Let him also list only the orders that have already been **delivered** by him, based on his registration ID;

Example request: `GET https://fastfeet.com/deliveryman/1/deliveries`

### 2. Change order status

You must allow the courier to have routes to include a start_date and end_date for orders. The deliverer can only make **5 pick-ups per day**.

Note: For the functionality to finish the delivery, you must allow the sending of an image that will fill the signature_id field of the order table.

### 3. Register delivery problems

The delivery person will not always be able to deliver the packages successfully, sometimes the recipient may be absent, or the delivery person himself may have a problem with his vehicle at the time of delivery.

The `delivery_problems` table should contain the following fields:

- delivery_id (order reference);
- description (description of the problem that the deliverer had);
- created_at;
- updated_at;

Create a route for the distributor to list all deliveries with some problem;

Create a route to list all the problems of an order based on the order ID.

Example request: `GET https://fastfeet.com/delivery/2/problems`

Create a route for the courier to register delivery problems just by entering your registration ID (order ID in the database);

Example of request: `POST https://fastfeet.com/delivery/3/problems`.

Create a route for the distributor to cancel a delivery based on the problem ID. This cancellation can happen due to the severity of the delivery problem, for example, in case of loss of the order.

Example of request: `DELETE https://fastfeet.com/problem/1/cancel-delivery`

When an order is cancelled, the delivery person should receive an email informing them of the cancellation.

---
