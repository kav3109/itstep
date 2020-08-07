import DataBase from './DataBase.js';

export default class Builder extends DataBase{

    $name = $('h4');
    $back = $('#back');
    $blocks = $('.blocks');

    setBlocks(indexRegion = null,indexSchool = null) {

        let $blocks = this.$blocks;
        let $data = this.$data;
        let $name = this.$name;
        let $back = this.$back;

        $blocks.empty();
        if (indexSchool) {
            $blocks.attr('data-region',indexRegion);
            let $region = this.getStatistic()[0].regions[indexRegion];
            let $school = $region.schools[indexSchool];
            let $classes = $school.classes;
            $name.text('CITY: ' + this.getStatistic()[0].cityName.toUpperCase() + ' -> REGION: ' +
                $region.regionName.toUpperCase() + ' -> ' + $school.schoolName);
            $classes.forEach((el) => {
                this.createBlock(el.className, el.allPlaces, el.filledPlaces)
            })
        }
        else if (indexRegion) {
            $blocks.removeAttr('data-region');
            let $region = this.getStatistic()[0].regions[indexRegion];
            let $schools = $region.schools;
            $name.text('CITY: ' + this.getStatistic()[0].cityName.toUpperCase() + ' -> REGION: ' +
                $region.regionName.toUpperCase());
            $schools.forEach((el, index) => {
                this.createBlock(el.schoolName, el.allPlaces, el.filledPlaces, indexRegion, index)
            });
            $back.css('display', 'block')
        }
        else {
            $blocks.removeAttr('data-region');
            let $regions = this.getStatistic()[0].regions;
            $name.text('CITY: ' + this.getStatistic()[0].cityName.toUpperCase());
            $regions.forEach((el, index) => {
                this.createBlock(el.regionName, el.allPlaces, el.filledPlaces, index)
            });
            $back.css('display', 'none')
        }
    }

    createBlock(name,all,filled,region = null, school = null) {

        let $block;
        let $data = this.$data;
        let $blocks = this.$blocks;

        if (school !== null) {
            $block = $('<div class="block" data-region = ' + region + ' data-school = ' + school + '></div>')
        }
        else if (region !== null) {
            $block = $('<div class="block" data-region = ' + region + '></div>')
        }
        else {
            $block = $('<div class="block"></div>')
        }
        let $info = this.getColor(all, filled);
        let $fill = $info.percent/10;
        let $color = $info.color;
        $block.append(
            '<div class="header">' + name.toUpperCase() + '</div>' +
            '<div class="circle" data-circleconfig=\'{"color": "' + $color + '", "fill": ' + $fill + '}\'></div>' +
            '<div class="footer"><div>places filled<br>' + filled + '</div>' +
            '<div>out of places available<br>' + all + '</div></div>'
        );
        $blocks.append($block);

        $('.circle').circle(
            {
                graduation: 10
            }
        )
    }
}
