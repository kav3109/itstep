import Builder from './Builder.js'

(function($) {
    $(document).ready(() => {
        
        const builder = new Builder();

        builder.setBlocks();
        $listenBlock();
        $listenBack();

        let $indexRegion, $indexSchool;

        function $listenBlock() {
            $('.block').click(function () {
                if ($(this).attr('data-school')) {
                    $indexRegion = $(this).attr('data-region');
                    $indexSchool = $(this).attr('data-school');
                    builder.setBlocks($indexRegion, $indexSchool)
                }
                else if ($(this).attr('data-region')) {
                    $indexRegion = $(this).attr('data-region');
                    builder.setBlocks($indexRegion)
                }
                $listenBlock()
            })

        }

        function $listenBack() {
            $('#back').click(function () {
                let $blocks =$('.blocks');
                if ($blocks.attr('data-region')) {
                    $indexRegion = $blocks.attr('data-region');
                    builder.setBlocks($indexRegion)
                }
                else {
                    builder.setBlocks()
                }
                $listenBlock()
            })
        }
    });
})(jQuery);

