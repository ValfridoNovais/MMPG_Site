ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4674").setExtent([-43.039269, -18.653218, -40.019189, -16.929193]);
var wms_layers = [];

var format_19_BPM_Municipios_0 = new ol.format.GeoJSON();
var features_19_BPM_Municipios_0 = format_19_BPM_Municipios_0.readFeatures(json_19_BPM_Municipios_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_19_BPM_Municipios_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19_BPM_Municipios_0.addFeatures(features_19_BPM_Municipios_0);
var lyr_19_BPM_Municipios_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_19_BPM_Municipios_0, 
                style: style_19_BPM_Municipios_0,
                interactive: true,
                title: '<img src="styles/legend/19_BPM_Municipios_0.png" /> 19_BPM_Municipios'
            });

lyr_19_BPM_Municipios_0.setVisible(true);
var layersList = [lyr_19_BPM_Municipios_0];
lyr_19_BPM_Municipios_0.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_19_BPM_Municipios_0.set('fieldImages', {'CD_MUN': '', 'NM_MUN': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_19_BPM_Municipios_0.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_19_BPM_Municipios_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});