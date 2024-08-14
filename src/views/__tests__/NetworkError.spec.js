import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";

import NetworkError from "@/views/NetworkError.vue";

describe("NetworkError.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(NetworkError);
  });

  it("should mount component", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should render text", () => {
    expect(wrapper.text()).toContain("It looks like you're experiencing some network issues");
  });
});
