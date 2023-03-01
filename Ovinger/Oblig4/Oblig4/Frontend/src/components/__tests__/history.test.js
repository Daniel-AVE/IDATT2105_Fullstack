import { mount } from "@vue/test-utils";
import Calculator from "../../components/Calculator.vue";
import History from "../../components/History.vue";
import { storage } from '../../store/index';
import { test, expect, describe } from "vitest";

describe("History", () => {
    test("History: Check if history exists", () => {
        let wrapper = mount(History);

        const historybox = wrapper.find(".historybox");

        expect(historybox.exists()).toBe(true);
    }),

    test("Check if equations are added to list after calculations", async () => {
        let wrapper = mount(History);
        let wrapper2 = mount(Calculator);
        let wrapper3 = mount(storage);
        await wrapper2.find("#one").trigger("click");
        await wrapper2.find("#plus").trigger("click");
        await wrapper2.find("#three").trigger("click");
        await wrapper2.find("#equals").trigger("click");

        const historylist = storage.history[0];
        expect(historylist).toBe("1 + 3 = 4");
    }),
    
    test("Check if equations list is reset when reset button is clicked", async () => {
        let wrapper = mount(History);
        let wrapper2 = mount(Calculator);
        await wrapper2.find("#one").trigger("click");
        await wrapper2.find("#plus").trigger("click");
        await wrapper2.find("#three").trigger("click");
        await wrapper2.find("#equals").trigger("click");

        

        await wrapper.find("#resetbutton").trigger("click");
        const historylist = storage.history[0];
        expect(historylist).toBe(undefined);
    })
  })