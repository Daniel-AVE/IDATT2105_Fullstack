import { createWrapperError, mount } from "@vue/test-utils";
import Calculator from "../../components/Calculator.vue";
import History from "../../components/History.vue";
import { test, expect, describe } from "vitest";

describe('Calculator', () => {
    test('Calculator: check if display exists', () => {
        let wrapper = mount(Calculator);
      const display = wrapper.find(".display");
      expect(display.exists()).toBe(true);
    }),

    test('Adds numbers correctly together', async () => {
        let wrapper = mount(Calculator);
        await wrapper.find("#one").trigger("click");
        await wrapper.find("#plus").trigger("click");
        await wrapper.find("#three").trigger("click");
        await wrapper.find("#equals").trigger("click");

        const displayText = wrapper.find(".display").text();
        expect(displayText).toBe("4");
    }),

    test('Subtracts numbers correctly together', async () => {
        let wrapper = mount(Calculator);

        await wrapper.find("#nine").trigger("click");
        await wrapper.find("#two").trigger("click");
        await wrapper.find("#minus").trigger("click");
        await wrapper.find("#three").trigger("click");
        await wrapper.find("#three").trigger("click");
        await wrapper.find("#equals").trigger("click");

        const displayText = wrapper.find(".display").text();
        expect(displayText).toBe("59");

    }),

    test('Multiplies numbers correctly together', async () => {
        let wrapper = mount(Calculator);

        await wrapper.find("#nine").trigger("click");
        await wrapper.find("#multiply").trigger("click");
        await wrapper.find("#three").trigger("click");
        await wrapper.find("#equals").trigger("click");

        const displayText = wrapper.find(".display").text();
        expect(displayText).toBe("27");

    }),

    test('Divide numbers correctly together', async () => {
        let wrapper = mount(Calculator);

        await wrapper.find("#nine").trigger("click");
        await wrapper.find("#zero").trigger("click");
        await wrapper.find("#divide").trigger("click");
        await wrapper.find("#three").trigger("click");
        await wrapper.find("#equals").trigger("click");

        const displayText = wrapper.find(".display").text();
        expect(displayText).toBe("30");

    }),

    test('% makes number divide by 100, and displays decimal numbers as decimals', async () => {
        let wrapper = mount(Calculator);

        await wrapper.find("#eight").trigger("click");
        await wrapper.find("#seven").trigger("click");
        await wrapper.find("#percent").trigger("click");

        const displayText = wrapper.find(".display").text();
        expect(displayText).toBe("0.87");

    }),

    test('AC clears result, and resets display to 0', async () => {
        let wrapper = mount(Calculator);

        await wrapper.find("#nine").trigger("click");
        await wrapper.find("#two").trigger("click");
        await wrapper.find("#minus").trigger("click");
        await wrapper.find("#three").trigger("click");
        await wrapper.find("#three").trigger("click");
        await wrapper.find("#equals").trigger("click");
        await wrapper.find("#AC").trigger("click");

        const displayText = wrapper.find(".display").text();
        expect(displayText).toBe("0");

    }),

    test('All number buttons work', async () => {
        let wrapper = mount(Calculator);

        await wrapper.find("#one").trigger("click");
        await wrapper.find("#two").trigger("click");
        await wrapper.find("#three").trigger("click");
        await wrapper.find("#four").trigger("click");
        await wrapper.find("#five").trigger("click");
        await wrapper.find("#six").trigger("click");
        await wrapper.find("#seven").trigger("click");
        await wrapper.find("#eight").trigger("click");
        await wrapper.find("#nine").trigger("click");
        await wrapper.find("#zero").trigger("click");

        const displayText = wrapper.find(".display").text();
        expect(displayText).toBe("1234567890");

    }),

    test('Previous result should be set as first number if new number is input after clicking = and then calculating again', async () => {
        let wrapper = mount(Calculator);

        await wrapper.find("#nine").trigger("click");
        await wrapper.find("#nine").trigger("click");
        await wrapper.find("#plus").trigger("click");
        await wrapper.find("#one").trigger("click");
        await wrapper.find("#equals").trigger("click");
        await wrapper.find("#minus").trigger("click");
        await wrapper.find("#five").trigger("click");
        await wrapper.find("#zero").trigger("click");

        const displayText = wrapper.find(".display").text();
        expect(displayText).toBe("50");

    }),

    test('Last clicked operator should be the active one', async () => {
        let wrapper = mount(Calculator);

        await wrapper.find("#nine").trigger("click");
        await wrapper.find("#two").trigger("click");
        await wrapper.find("#minus").trigger("click");
        await wrapper.find("#plus").trigger("click");
        await wrapper.find("#eight").trigger("click");
        await wrapper.find("#equals").trigger("click");

        const displayText = wrapper.find(".display").text();
        expect(displayText).toBe("100");

    }),

    test('Check if result is infinity if divided by 0', async () => {
        let wrapper = mount(Calculator);

        await wrapper.find("#nine").trigger("click");
        await wrapper.find("#two").trigger("click");
        await wrapper.find("#divide").trigger("click");
        await wrapper.find("#zero").trigger("click");
        await wrapper.find("#equals").trigger("click");

        const displayText = wrapper.find(".display").text();
        expect(displayText).toBe("Infinity");
    }),

    test('Check if result is 0 if multiplied by 0', async () => {
        let wrapper = mount(Calculator);

        await wrapper.find("#nine").trigger("click");
        await wrapper.find("#multiply").trigger("click");
        await wrapper.find("#zero").trigger("click");
        await wrapper.find("#equals").trigger("click");

        const displayText = wrapper.find(".display").text();
        expect(displayText).toBe("0");

    }),

    test('Check that display shows correct negative number if result is negative by subtracting', async () => {
        let wrapper = mount(Calculator);

        await wrapper.find("#nine").trigger("click");
        await wrapper.find("#minus").trigger("click");
        await wrapper.find("#two").trigger("click");
        await wrapper.find("#four").trigger("click");
        await wrapper.find("#equals").trigger("click");

        const displayText = wrapper.find(".display").text();
        expect(displayText).toBe("-15");

    }),

    test('Check that display shows correct negative number if result is negative by adding to a negative number', async () => {
        let wrapper = mount(Calculator);

        await wrapper.find("#nine").trigger("click");
        await wrapper.find("#minus").trigger("click");
        await wrapper.find("#two").trigger("click");
        await wrapper.find("#four").trigger("click");
        await wrapper.find("#equals").trigger("click");
        await wrapper.find("#plus").trigger("click");
        await wrapper.find("#five").trigger("click");
        await wrapper.find("#equals").trigger("click");

        const displayText = wrapper.find(".display").text();
        expect(displayText).toBe("-10");

    }),

    test('Check that display shows correct negative number if result is negative by multiplying with a negative number', async () => {
        let wrapper = mount(Calculator);

        await wrapper.find("#nine").trigger("click");
        await wrapper.find("#minus").trigger("click");
        await wrapper.find("#two").trigger("click");
        await wrapper.find("#four").trigger("click");
        await wrapper.find("#equals").trigger("click");
        await wrapper.find("#multiply").trigger("click");
        await wrapper.find("#three").trigger("click");
        await wrapper.find("#equals").trigger("click");

        const displayText = wrapper.find(".display").text();
        expect(displayText).toBe("-45");
    }),

    test('Check that display shows correct negative number if result is negative by dividing with a neegative number', async () => {
        let wrapper = mount(Calculator);

        await wrapper.find("#nine").trigger("click");
        await wrapper.find("#minus").trigger("click");
        await wrapper.find("#two").trigger("click");
        await wrapper.find("#four").trigger("click");
        await wrapper.find("#equals").trigger("click");
        await wrapper.find("#divide").trigger("click");
        await wrapper.find("#three").trigger("click");
        await wrapper.find("#equals").trigger("click");

        const displayText = wrapper.find(".display").text();
        expect(displayText).toBe("-5");

    })
  })

