import About from "@/views/About.vue";
import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";

describe("About.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(About, {});
  })

  it("should render component", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should render text", () => {
    expect(wrapper.text()).toContain("This is an about page.");
  });
});
