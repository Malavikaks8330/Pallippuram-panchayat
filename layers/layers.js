var wms_layers = [];

var format_pallippurcopy_0 = new ol.format.GeoJSON();
var features_pallippurcopy_0 = format_pallippurcopy_0.readFeatures(json_pallippurcopy_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pallippurcopy_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pallippurcopy_0.addFeatures(features_pallippurcopy_0);
var lyr_pallippurcopy_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pallippurcopy_0, 
                style: style_pallippurcopy_0,
                popuplayertitle: 'pallippur copy',
                interactive: true,
                title: '<img src="styles/legend/pallippurcopy_0.png" /> pallippur copy'
            });
var format_FIX_GEOM_1 = new ol.format.GeoJSON();
var features_FIX_GEOM_1 = format_FIX_GEOM_1.readFeatures(json_FIX_GEOM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIX_GEOM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIX_GEOM_1.addFeatures(features_FIX_GEOM_1);
var lyr_FIX_GEOM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FIX_GEOM_1, 
                style: style_FIX_GEOM_1,
                popuplayertitle: 'FIX_GEOM',
                interactive: true,
    title: 'FIX_GEOM<br />\
    <img src="styles/legend/FIX_GEOM_1_0.png" /> CHERAI KADAPPURAM<br />\
    <img src="styles/legend/FIX_GEOM_1_1.png" /> CONVENT PALAM<br />\
    <img src="styles/legend/FIX_GEOM_1_2.png" /> ELINJAMKULAM<br />\
    <img src="styles/legend/FIX_GEOM_1_3.png" /> GOWREESWARAM<br />\
    <img src="styles/legend/FIX_GEOM_1_4.png" /> JANATHA<br />\
    <img src="styles/legend/FIX_GEOM_1_5.png" /> KARUTHALA<br />\
    <img src="styles/legend/FIX_GEOM_1_6.png" /> KOMARANTHY<br />\
    <img src="styles/legend/FIX_GEOM_1_7.png" /> KOVILAKAM SOUTH<br />\
    <img src="styles/legend/FIX_GEOM_1_8.png" /> KOVILUNKAL<br />\
    <img src="styles/legend/FIX_GEOM_1_9.png" /> MANAYATHUKADU<br />\
    <img src="styles/legend/FIX_GEOM_1_10.png" /> MANI BAZAR<br />\
    <img src="styles/legend/FIX_GEOM_1_11.png" /> MARKET<br />\
    <img src="styles/legend/FIX_GEOM_1_12.png" /> MOSQUE<br />\
    <img src="styles/legend/FIX_GEOM_1_13.png" /> MUNAMBAM HARBOUR<br />\
    <img src="styles/legend/FIX_GEOM_1_14.png" /> MUNAMBAM JANAHITHA<br />\
    <img src="styles/legend/FIX_GEOM_1_15.png" /> MUNAMBAM KADAPPURAM<br />\
    <img src="styles/legend/FIX_GEOM_1_16.png" /> PALLIPPURAM FORT<br />\
    <img src="styles/legend/FIX_GEOM_1_17.png" /> PANCHAYAT<br />\
    <img src="styles/legend/FIX_GEOM_1_18.png" /> REKTHESWARY<br />\
    <img src="styles/legend/FIX_GEOM_1_19.png" /> SAHODARA BHAVANAM<br />\
    <img src="styles/legend/FIX_GEOM_1_20.png" /> SAMOOHYA SEVASANGHAM<br />\
    <img src="styles/legend/FIX_GEOM_1_21.png" /> SMHS<br />\
    <img src="styles/legend/FIX_GEOM_1_22.png" /> THRIKKADAKKAPPILLY<br />\
    <img src="styles/legend/FIX_GEOM_1_23.png" /> VADAYIL<br />\
    <img src="styles/legend/FIX_GEOM_1_24.png" /> <br />' });
var format_roadpallip_2 = new ol.format.GeoJSON();
var features_roadpallip_2 = format_roadpallip_2.readFeatures(json_roadpallip_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roadpallip_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roadpallip_2.addFeatures(features_roadpallip_2);
var lyr_roadpallip_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roadpallip_2, 
                style: style_roadpallip_2,
                popuplayertitle: 'roadpallip',
                interactive: true,
                title: '<img src="styles/legend/roadpallip_2.png" /> roadpallip'
            });
var format_drainage_3 = new ol.format.GeoJSON();
var features_drainage_3 = format_drainage_3.readFeatures(json_drainage_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drainage_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drainage_3.addFeatures(features_drainage_3);
var lyr_drainage_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_drainage_3, 
                style: style_drainage_3,
                popuplayertitle: 'drainage',
                interactive: true,
                title: '<img src="styles/legend/drainage_3.png" /> drainage'
            });

lyr_pallippurcopy_0.setVisible(true);lyr_FIX_GEOM_1.setVisible(true);lyr_roadpallip_2.setVisible(true);lyr_drainage_3.setVisible(true);
var layersList = [lyr_pallippurcopy_0,lyr_FIX_GEOM_1,lyr_roadpallip_2,lyr_drainage_3];
lyr_pallippurcopy_0.set('fieldAliases', {'id': 'id', });
lyr_FIX_GEOM_1.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_roadpallip_2.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_drainage_3.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_pallippurcopy_0.set('fieldImages', {'id': 'TextEdit', });
lyr_FIX_GEOM_1.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_roadpallip_2.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_drainage_3.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_pallippurcopy_0.set('fieldLabels', {'id': 'no label', });
lyr_FIX_GEOM_1.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'no label', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_roadpallip_2.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_drainage_3.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_drainage_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});