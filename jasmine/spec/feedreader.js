

$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('url s are defined',function(){

            allFeeds.forEach(function(feed){

              expect(feed.url).toBeDefined();//checking if the url if true
              expect(feed.url.length).not.toBe(0);//'0' because the url.length must not be zero==empty
                          });
        });


        it('name s are defined', function(){
          //'forEach' to move through the entire array
          allFeeds.forEach(function(feed){
         expect(feed.name).toBeDefined();//checking that it's defined
         expect(feed.name.length).not.toBe(0);//name length is not empty
            });
        });
    });

    //the first sweet
        describe("The menu", function(){
            it("menu element is hidden", function(){
                let body = $("body");//elemets that does the css hidding
                //checking is the body element has menu hidden which means menu is hidden if true
                let Hidden = $(body).hasClass("menu-hidden");
                expect(Hidden).toBe(true);
            });

            it("toggle on click event", function(){
                  // grab hold of toggling icons
                  let icon = $(".menu-icon-link").first();//trigger
                  let body = $("body");

                  icon.click();//for one single click on the menu

                  //the hidden menu class should not apear now
                  let ClickOne = !body.hasClass("menu-hidden");

                  //for the second click where the menu should be hidden
                  icon.click();

                  let ClickTwo = body.hasClass("menu-hidden");

                  expect(ClickOne).toBe(true);

                  expect(ClickTwo).toBe(true);
              });
         });
         //second sweet
             describe("Initial Entries", function(){

                 beforeEach(function(done){
                     loadFeed(0, function(){
                         done();
                     });
                 });

                 it("if entry has more than 0 entries", function(done){
                     //counting number of entries with the feeds
                  let Counter = $(".feed .entry").length;

                  expect(Counter).not.toBe(0);

                    done();
                 });
             });


             describe("New Feed Selection", function(){
                   //array for new results
                   let resultsArray = []; //we define it as 'let' because we may add to the array
                   //initial values of first and second testing results
                   let FirstResult = false;
                   let SecResult = false;

                   beforeEach(function(done){
            loadFeed(0, function(){//'0' for the first url

                                 FirstResult = true;
                                 resultsArray.push( $(".feed").html() );//testing
                                 //if both tests are done
                                 if(SecResult) {
                                     done();
                                 }});
            loadFeed(1, function(){

              //'1' for the second url
                  SecResult = true;//turn in on if it is done loading
                  // capture the output html from the .feed element
                  resultsArray.push( $(".feed").html() );
                  //checking if the first testing is done
                  if(FirstResult) {
                      done();
                  }
              });
          });

          //if both first and second testings have been run
                  it("new feed diffrent than the old one", function(done){
                      expect(resultsArray.length).toBe(2);//'2' because we should have the two results in the array
                      expect(resultsArray[0]).not.toBe(resultsArray[1]);//checking that they both are not the same result
                      done();



        });


    });





}());
