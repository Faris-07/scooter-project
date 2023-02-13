const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe("ScooterApp", () => {
    const scooterApp = new ScooterApp();

    test("Test instance has correct properties", () => {
        expect(scooterApp).toHaveProperty("stations", {"Liverpool Street": [],
        "Bank": [],
        "Shoreditch": []});
        expect(scooterApp).toHaveProperty("registeredUsers", {});
    });
});

describe("Test Scooter app methods", () => {
    const scooterApp = new ScooterApp()
    const scooter = new Scooter("station")

// register user
describe('Tests register method', () => {
    test("Test to register a new user", () => {
        scooterApp.registerUser("test_user", "test_password", 20);
        expect(scooterApp.registeredUsers).toHaveProperty("test_user");
    });
    
    test("Test to register a registered user", () => {
        scooterApp.registeredUsers = {"test_user" : 1}
    
        expect(() => {
        scooterApp.registerUser("test_user", "test_password", 20);
        }).toThrow("already Registered");
    });
    
    test("Test to register a user under 18", () => {
        expect(() => {
        scooterApp.registerUser("young_user", "young_password", 16);
        }).toThrow("too young to register");
    });
});

// log in
describe('Tests login method', () => {
    test("Test to log in an existing user", () => {
        scooterApp.registerUser("Bob", "Password", 18);
        scooterApp.loginUser("Bob", "Password");
        expect(scooterApp.registeredUsers["Bob"].loggedIn).toBe(true);
    });
    
    test("Test to throw an error if the username is incorrect", () => {
        expect(() => scooterApp.loginUser("wrong_username", "Password"))
        .toThrow("Username or password is incorrect");
    });
    
    test("Test to throw an error if the password is incorrect", () => {
        expect(() => scooterApp.loginUser("Bob", "wrong_password"))
        .toThrow("Username or password is incorrect");
    });
});

// log out
describe('Tests logout method', () => {
    test("Test if a logged in in user can logout", () => {
        scooterApp.loginUser("Bob", "Password");
        scooterApp.logoutUser("Bob");
        expect(scooterApp.registeredUsers["Bob"].loggedIn).toBe(false);
    });


    test("Test to throw an error if the user is not logged in", () => {
        expect(() => scooterApp.logoutUser("Bob"))
            .toThrow("No such user is logged in");
    });
});

// Create Scooter
describe('Tests create scooter method', () => {
    test("Test to create a new scooter and add it to the station", () => {
        scooterApp.createScooter("Liverpool Street");
        expect(scooterApp.stations["Liverpool Street"][0]).toBeInstanceOf(Scooter);
        expect(scooterApp.stations["Liverpool Street"]).toContain(scooterApp.stations["Liverpool Street"][0]);
    });

    test("Test to throw an error if the station does not exist", () => {
        expect(() => {
        scooterApp.createScooter("Nowhere");
        }).toThrowError("No such station");
    });
});

// rent scooter
describe('Tests rent method', () => {
    test("Test if user can rent a scooter", () => {
        const user3 = scooterApp.registerUser("user3", "Password3", 25);
        scooterApp.rentScooter(scooterApp.stations["Liverpool Street"][0], user3);
        expect(scooterApp.stations["Liverpool Street"][0].user).toBe(user3);
    });

    test("Test to throw an error if a scooter is already rented", () => {
        const user4 = scooterApp.registerUser("user4", "Password4", 27);
        scooterApp.loginUser("user4", "Password4");
        const user5 = scooterApp.registerUser("user5", "Password5", 29);
        scooterApp.loginUser("user5", "Password5");
        scooterApp.rentScooter(scooter, "user4");
        expect(() => {
        scooterApp.rentScooter(scooter, "user5");
        }).toThrowError("Scooter already rented");
    });
});

// dock scooter
describe('Tests dock scooter method', () => {
    test("Tests scooter is added to the stations scooter list", () => {
        scooterApp.dockScooter(scooter, "Liverpool Street");
        let station = scooterApp.stations["Liverpool Street"];
        expect(station).toContain(scooter);
    })

    test("Test to throw an error if station does not exist", () => {
        expect(() => {
            scooterApp.dockScooter(scooter, "Nowhere");
        }).toThrowError("No such station");
    });

    test("Test to throw an error if a scooter is already at the station", () => {
        let station = scooterApp.stations["Liverpool Street"];
        expect(station).toContain(scooter);
        expect(() => {
            scooterApp.dockScooter(scooter, "Liverpool Street");
            }).toThrowError("scooter already at station");
    })
});
});