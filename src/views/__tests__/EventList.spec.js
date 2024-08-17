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

  it("should render placeholder if no events", async () => {
    const mockEvents = [];

    EventService.getEvents.mockResolvedValue({
      data: mockEvents,
      headers: { "x-total-count": 0 }
    });

    await wrapper.vm.fetchEvents();

    const eventCards = wrapper.findAllComponents(EventCard);
    expect(eventCards.length).toBe(mockEvents.length);
    expect(wrapper.text()).toContain("No events available.");
  });

  it("should render 'Next' when there are more pages", async () => {
    const mockEvents = [{ id: 1 }, { id: 2 }];

    EventService.getEvents.mockResolvedValue({
      data: mockEvents,
      headers: { "x-total-count": 4 }
    });

    wrapper.setProps({ page: 1 });
    await wrapper.vm.fetchEvents();

    const nextLink = wrapper.find("[data-test='next']");

    expect(nextLink.exists()).toBe(true);
    expect(nextLink.text()).toBe("Next");
  });

  it("should render 'Back' when there are more pages", async () => {
    const mockEvents = [{ id: 1 }, { id: 2 }];

    EventService.getEvents.mockResolvedValue({
      data: mockEvents,
      headers: { "x-total-count": 4 }
    });

    wrapper.setProps({ page: 2 });
    await wrapper.vm.fetchEvents();

    const backLink = wrapper.find("[data-test='back']");

    expect(backLink.exists()).toBe(true);
    expect(backLink.text()).toBe("Back");
  });

  it("should not render 'Next' on last page", async () => {
    const mockEvents = [{ id: 1 }, { id: 2 }];

    EventService.getEvents.mockResolvedValue({
      data: mockEvents,
      headers: { "x-total-count": 4 }
    });

    wrapper.setProps({ page: 2 });
    await wrapper.vm.fetchEvents();

    const nextLink = wrapper.find("[data-test='next']");
    expect(nextLink.exists()).toBe(false);
  });

  it("should not render 'Back' on first page", async () => {
    const mockEvents = [{ id: 1 }, { id: 2 }];

    EventService.getEvents.mockResolvedValue({
      data: mockEvents,
      headers: { "x-total-count": 4 }
    });

    wrapper.setProps({ page: 1 });
    await wrapper.vm.fetchEvents();

    const backLink = wrapper.find("[data-test='back']");
    expect(backLink.exists()).toBe(false);
  });

  it("should render separator when 'Back' and 'Next' are present", async () => {
    const mockEvents = [{ id: 1 }, { id: 2 }];

    EventService.getEvents.mockResolvedValue({
      data: mockEvents,
      headers: { "x-total-count": 6 }
    });

    wrapper.setProps({ page: 2 });
    await wrapper.vm.fetchEvents();

    const separator = wrapper.find("[data-test='separator']");
    expect(separator.exists()).toBe(true);
  });
});
