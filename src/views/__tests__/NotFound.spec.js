import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";

import NotFound from "@/views/NotFound.vue";

describe("NotFound.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(NotFound);
  });

  it("should mount component", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should render default text if no resource", () => {
    expect(wrapper.text()).toContain("The page you're looking for is not here.");
  });

  it("should render resource text if resource given as a prop", async () => {
    await wrapper.setProps({ resource: "event" });
    expect(wrapper.text()).toContain("The event you're looking for is not here.");
  });

  it("should match snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
