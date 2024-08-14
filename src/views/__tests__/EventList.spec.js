import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createMemoryHistory, createRouter } from "vue-router";

import EventList from "../EventList.vue";
import NetworkError from "../NetworkError.vue";

const mockRouter = {
  push: vi.fn()
};

describe("EventList.vue", () => {
  let wrapper;

  beforeEach(() => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: "/network-error",
          name: "NetworkError",
          component: NetworkError
        }
      ]
    });
    wrapper = mount(EventList, {
      global: {
        plugins: [router],
        mocks: {
          $router: mockRouter
        }
      }
    });
  });

  it("should mount component", () => {
    expect(wrapper).toBeTruthy();
  });
});
