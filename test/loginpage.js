describe("interacting with web elements", () => {
    it("enter values in text filed", () => {
        browser.url('/');
        const search = $('#twotabsearchtextbox');
    
        search.setValue('apple 13pro max');
        browser.pause(6000);
    });

});