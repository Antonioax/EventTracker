import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";

import About from "@/views/About.vue";

describe("About.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(About, {});
  })

  it("should mount component", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should render text", () => {
    expect(wrapper.text()).toContain("This is an about page.");
  });

  it("should match snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  })
});
