# Coffee-Delivery

## Coffee-Delivery - Rocketseat  🚀

Project created with the help of vite in React.ts was developed during the second
challenge of Rocketseat's ignite course. The main purpose of this challenge is to train
the subjects covered during the course, such as: routes, forms, data sharing, stylized
elements, etc. The application is a small coffee delivery website, where the user has the
possibility to choose 14 varieties of coffees, after which he must fill out a small form with
data such as address and payment method. If everything is correct with the data filled
in, a new window will show final information about the delivery and payment method
chosen and the waiting time to receive the order placed. <br>
To try this project, [click here](https://coffee-delivery-silk-six.vercel.app/). 

<img alt="" title="Coffee-delivery" src="https://github.com/rodrrigodev/coffee-delivery/blob/main/src/assets/Captura%20de%20Tela%20(200).png?raw=true" />

<br>

## Some actions available

🛒 Add a new item to shopping cart. <br>
🗑 Remove item from shopping cart. <br>
➕ Increase amount of coffee. <br>
➖ Decrease amount of coffee.
<br>
### ⚠ Warning!!!

There is a limit of 20 items for every coffee option available, so the maximum amount of
coffee that the user can buy is 280 items in total.

<img alt="" title="Coffee-delivery" src="https://github.com/rodrrigodev/coffee-delivery/blob/main/src/assets/Captura%20de%20Tela%20(201).png?raw=true" />

<br>

⛔ Validations

The validations were made through the zod library where the following criterion was
used: <br>
* Zipcode ⇒ Only numbers are accepted, it must have at least 8 numeric characters.<br>
* Street ⇒ Minimum 4 characters, maximum 40 characters.<br>
* Home Number ⇒ Only numbers are accepted.<br>
* Complement ⇒ Optional field.<br>
* District ⇒ Minimum 4 characters, maximum 30 characters.<br>
* City ⇒ Minimum 4 characters, maximum 25 characters.<br>
* UF ⇒ Minimum 2 characters.<br>
* Payment Method ⇒ A payment method must be selected (Credit/Debit Card or
Cash)

<img alt="" title="validations" src="https://github.com/rodrrigodev/coffee-delivery/blob/main/src/assets/Captura%20de%20Tela%20(203).png?raw=true" />

Note: the order will not be confirmed unless all fields are completed correctly. <br>

## 🛠  Tools used in project development:

* [Node](https://nodejs.org/en/) <br>
* [Vite](https://vitejs.dev/) <br>
* [React](https://beta.reactjs.org/) <br>
* [Typescript](https://www.typescriptlang.org/) <br>
* [Phosphor Icons](https://phosphoricons.com/) <br>
* [Date-fns](https://date-fns.org/) <br>
* [React Hook Form](https://react-hook-form.com/)


