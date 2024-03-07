# swipe-assignment-frontend

## About the project

1. It is created using react (version 17) and redux (version 4).

## Setup Instructions

```bash
npm install
npm start
```

## Pages

1. `/`
   1. No invoices present
   2. Create invoice CTA
2. `/create`
   1. Form
      1. Current data
      2. Invoice number
      3. Due date
      4. Bill details:
         1. To
         2. From
      5. Item
         1. Name 
         2. Description
         3. Qty
         4. Price
         5. Action
      6. Add button
   2. Bill calculation
   3. Add invoice
   4. Review invoice

## Feature requests

1. Implement a products tab
   1. ? Is it a new page or a new section in the create invoice page.
      1. ? If it is a new page, where will the go to page link stay, in the home page or the create invoice page
      2. ? Should there be an edit for edit action, it should be editable by default just like in view invoice page
   2. ? What are all the product information?
      1. ? Is it just name, description and rate
      2. ? Are the items actually product
      3. ? Do we also want to create an inventory
   3. ? Grouping of products
      1. ? Can we name the groups
      2. ? Can a product be in multiple groups
   4. ? What sort of validation do we want for the changes
   5. ? Do we also have 
   6. ? Will random filling of values crate a new product