import { expect } from "chai";
import { Breadcrumb, BreadcrumbTemplate as template } from "./index";
import { fixture } from "../fixture";
import { customElement } from "@microsoft/fast-element";

@customElement({
    name: "fast-breadcrumb",
    template,
})
class FASTBreadcrumb extends Breadcrumb {}

async function setup() {
    const { element, connect, disconnect } = await fixture<FASTBreadcrumb>(
        "fast-breadcrumb"
    );

    return { element, connect, disconnect };
}

describe("Breadcrumb", () => {
    it("should include a role of navigation", async () => {
        const { element, connect, disconnect } = await fixture<Breadcrumb>(
            "fast-breadcrumb"
        );

        await connect();

        expect(element.getAttribute("role")).to.equal("navigation");

        await disconnect();
    });
});
