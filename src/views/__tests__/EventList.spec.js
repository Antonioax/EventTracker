import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createMemoryHistory, createRouter } from "vue-router";

import EventList from "../EventList.vue";
import { routes } from "@/router/routes";
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService";

vi.mock("@/services/EventService", () => ({
  default: {
    getEvents: vi.fn()
  }
}));

const mockRouter = {
  push: vi.fn()
};

describe("EventList.vue", () => {
  let wrapper;

  beforeEach(() => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: routes
    });
    wrapper = mount(EventList, {
      global: {
        plugins: [router],
        mocks: {
          $router: mockRouter
        },
        stubs: {
          EventCard: true
        }
      }
    });
  });

  it("should mount component", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should render EventCard components for each event", async () => {
    const mockEvents = [{ id: 1 }, { id: 2 }];

    EventService.getEvents.mockResolvedValue({
      data: mockEvents,
      headers: { "x-total-count": 2 }
    });

    await wrapper.vm.fetchEvents();

    const eventCards = wrapper.findAllComponents(EventCard);
    expect(eventCards.length).toBe(mockEvents.length);
  });
});
