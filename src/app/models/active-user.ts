export class Admin {
    type: string;
    name: string;
    hasEveryThing: boolean;
    constructor(obj: any) {
        this.type = obj.type;
        this.name = obj.name;

        this.hasEveryThing = true;
    }

    preformAction(): void {
        console.log('Admin');
    }
}

export class Accounting {
    type: string;
    name: string;

    hasAccountingPermission: boolean;
    constructor(obj: any) {
        this.type = obj.type;
        this.name = obj.name;

        this.hasAccountingPermission = true;
    }
    preformAction(): void {
        console.log('Accounting');
    }
}

export class business {
    type: string;
    name: string;

    hasBussinessPermission: boolean;
    constructor(obj: any) {
        this.type = obj.type;
        this.name = obj.name;

        this.hasBussinessPermission = true;
    }
    preformAction(): void {
        console.log('Business');
    }
}