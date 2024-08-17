import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";

import NetworkError from "@/views/NetworkError.vue";
import { createRouter, createWebHistory } from "vue-router";

describe("NetworkError.vue", () => {
  let wrapper;
  let router;

  beforeEach(() => {
    router = createRouter({
      history: createWebHistory(),
      routes: []
    });

    vi.spyOn(router, "go");

    wrapper = mount(NetworkError, {
      global: {
        plugins: [router]
      }
    });
  });

  it("should mount component", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should render text", () => {
    expect(wrapper.text()).toContain("It looks like you're experiencing some network issues");
  });

  it("should go back on link click", async () => {
    const link = wrapper.find("a");

    await link.trigger("click");

    expect(router.go).toHaveBeenCalledWith(-1);
  });
});
