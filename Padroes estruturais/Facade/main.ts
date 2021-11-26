import { Facade } from "./Facade";
import { Subsystem1, Subsystem2 } from "./Subsystem";

function main() {
    // ...
    /**
     * The client code may have some of the subsystem's objects already created. In
     * this case, it might be worthwhile to initialize the Facade with these objects
     * instead of letting the Facade create new instances.
     */
    const subsystem1 = new Subsystem1();
    const subsystem2 = new Subsystem2();
    const facade = new Facade(subsystem1, subsystem2);

    console.log(facade.operation());

    // ...
}


main();