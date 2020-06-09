(function($) {
    $(document).ready(() => {

        $('nav span').click(function(){
            if($(this).hasClass('active')) return;
            $('.active').removeClass('active');
            $(this).addClass('active');
            if($(this).hasClass('books')) {
                domBuilder('books');
                return;
            }
            if($(this).hasClass('visitors')) return domBuilder('visitors');
            if($(this).hasClass('cards')) return domBuilder('cards');
            if($(this).hasClass('statistic')) return domBuilder('statistic');
        });

        const domBuilder = (tabName, arrData ) => {
            const $wrapper = $('.wrapper');
            $wrapper.empty();
            if (tabName === 'visitors') {
                return $wrapper.append(`<h4>ALL VISITORS:</h4>
                                        <input type="button" value="New visitor" class="new visitor">
                                        <hr>
                                        <label for="sort">Sort by:</label>
                                        <select id="sort">
                                            <option value="id">ID</option>
                                            <option value="name">Author's name</option>
                                        </select>
                                        <input type="button" value="Sort">
                                        <label for="search">Search:</label>
                                        <input type="text" id="search">
                                        <input type="button" value="Search">
                                        <table width="100%" border="1" cellpadding="4" cellspacing="0">
                                            <tr class="headerTable">
                                                <td>ID</td>
                                                <td>Full Name</td>
                                                <td>Phone</td>
                                                <td>Edit</td>
                                            </tr>
                                            <tr>
                                                <td>test</td>
                                                <td>test</td>
                                                <td>test</td>
                                                <td class="icon"><span>&#9998;</span></td>
                                            </tr>
                                        </table>`).ready(listenAddButton('visitor'));
            }
            if (tabName === 'books') {
                return $wrapper.append(`<h4>ALL BOOKS:</h4>
                                        <input type="button" value="New book" class="new book">
                                        <hr>
                                        <label for="sort">Sort by:</label>
                                        <select id="sort">
                                            <option value="title">Book's title</option>
                                            <option value="name">Author's name</option>
                                            <option value="count">Count of books</option>
                                        </select>
                                        <input type="button" value="Sort">
                                        <label for="search">Search:</label>
                                        <input type="text" id="search">
                                        <input type="button" value="Search">
                                    
                                        <table width="100%" border="1" cellpadding="4" cellspacing="0">
                                            <tr class="headerTable">
                                                <td>ID</td>
                                                <td>Book title</td>
                                                <td>Author's name</td>
                                                <td>Year</td>
                                                <td>Producer</td>
                                                <td>Pages</td>
                                                <td>Counts</td>
                                                <td>Edit/Delete</td>
                                            </tr>
                                            <tr>
                                                <td>test</td>
                                                <td>test</td>
                                                <td>test</td>
                                                <td>test</td>
                                                <td>test</td>
                                                <td>test</td>
                                                <td>test</td>
                                                <td class="icon"><span>&#9998;</span></td>
                                            </tr>
                                        </table>`).ready(listenAddButton('book'));
            }
            if (tabName === 'cards') {
                return $wrapper.append(`<h4>ALL CARDS:</h4>
                                        <input type="button" value="New card" class="new card">
                                        <hr>
                                        <label for="sort">Sort by:</label>
                                        <select id="sort">
                                            <option value="returnDate">Return date</option>
                                        </select>
                                        <input type="button" value="Sort">
                                        <label for="search">Search:</label>
                                        <input type="text" id="search">
                                        <input type="button" value="Search">
                                    
                                        <table width="100%" border="1" cellpadding="4" cellspacing="0">
                                            <tr class="headerTable">
                                                <td>ID</td>
                                                <td>Visitor</td>
                                                <td>Book</td>
                                                <td>Borrow Date</td>
                                                <td>Return Date</td>
                                            </tr>
                                            <tr>
                                                <td>test</td>
                                                <td>test</td>
                                                <td>test</td>
                                                <td>test</td>
                                                <td class="icon"><span>&#8617;</span></td>
                                            </tr>
                                        </table>`);
            }
        };
        domBuilder('books');

        function listenAddButton(type) {
            const $modal = $('.modal');
            const $modalOverlay = $('.modal-overlay');
            const $close = $('.close-modal');
            const $modalContent = $('.modal-content');

            $(`.new.${type}`).click(function () {
                $modal.addClass('active');
                $modalOverlay.addClass('active');
                $modalOverlay.removeProp('hidden');
                $modalContent.empty();

                if(type === 'book') {
                    return $modalContent.append(`
                                    <label for="newTitle">Title:</label><br />
                                    <input type="text" id="newTitle"><br />
                                    <label for="newAuthor">Author:</label><br />
                                    <input type="text" id="newAuthor"><br />
                                    <label for="newYear">Year:</label><br />
                                    <input type="text" id="newYear"><br />
                                    <label for="newProducer">Producer:</label><br />
                                    <input type="text" id="newProducer"><br />
                                    <label for="newPages">Pages:</label><br />
                                    <input type="text" id="newPages"><br />
                                    <label for="newCount">Count:</label><br />
                                    <input type="text" id="newCount"><br />
                                    <input type="button" value="Add Book">
                                    `)
                }
                if(type === 'visitor') {
                    return $modalContent.append(`
                                    <label for="newName">Full Name:</label><br />
                                    <input type="text" id="newName"><br />
                                    <label for="newPhone">Phone:</label><br />
                                    <input type="text" id="newPhone"><br />
                                    <input type="button" value="Add Visitor">
                                    `)
                }
            });

            $close.click(function(){
                $modal.removeClass('active');
                $modalOverlay.removeClass('active');
            });
        }

    });
})(jQuery);