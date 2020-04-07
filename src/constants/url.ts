export const urlUser = "https://petstore.swagger.io/v2/user/";

export const urlLogin = (username: string, password: string) =>
  `https://petstore.swagger.io/v2/user/login?username=${username}&password=${password}`;

export const urlLogout = "https://petstore.swagger.io/v2/user/logout";

export const urlOrder = "https://petstore.swagger.io/v2/store/order/";

export const urlPetByStatus =
  "https://petstore.swagger.io/v2/pet/findByStatus?status=";

export const urlPet = "https://petstore.swagger.io/v2/pet/";
