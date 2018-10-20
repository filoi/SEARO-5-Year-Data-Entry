/**
 * Created by hisp on 2/12/15.
 */

var bidReportsAppServices = angular.module('bidReportsAppServices', [])
    .service('MetadataService',function($http){
       return {
           getOrgUnit : function(id){
               var def = $.Deferred();
               $.ajax({
                   type: "GET",
                   dataType: "json",
                   contentType: "application/json",
                   url: '../../organisationUnits/'+id+".json?fields=*,dataSets[id,name]",
                  
                   success: function (data) {
                       def.resolve(data);
                   }
               });
               return def;
           },
		         getdataSets : function(id){
               var def = $.Deferred();
               $.ajax({
                   type: "GET",
                   dataType: "json",
                   contentType: "application/json",
                   url: '../../dataSets/'+id+".json?fields=id,name,sections[id,name]",
                   success: function (data) {
                       def.resolve(data);
                   }
               });
               return def;
           }
		   ,


// First Change in API for categoryCombo 
           getsection : function(id1){
               var def = $.Deferred();
               $.ajax({
                   type: "GET",
                   dataType: "json",
                   contentType: "application/json",
                   url: '../../sections/'+id1+".json?fields=id,name,dataElements[id,name,categoryCombo[categoryOptionCombos[id,name]]",
                   success: function (data) {
                       def.resolve(data);
                   },timeout: 2000000
               }).fail(function (xhr, status) {
                   if (status == "timeout") {
                       def.reject(status)
                   }
               });
               return def;
           }

           ,



        getdatavalueset : function(id1,id2,id3){
            var def = $.Deferred();
            $.ajax({
                type: "GET",
                dataType: "json",
                contentType: "application/json",
                url: '../../dataValueSets.json?dataSet='+id1+"&period="+id2+"&orgUnit="+id3,
                success: function (data) {
                    def.resolve(data);
                },timeout: 2000000
            }).fail(function (xhr, status) {
                if (status == "timeout") {
                    def.reject(status)
                }
            });
            return def;
        }

           ,


           putdatavaluesetfor: function(id0,id1,id2,cc,id3,id4,id5) {
               var def = $.Deferred();

      
               
               var dataObj = {

             dataSet: id1,
                   period: id3,
                   orgUnit: id0,
                   "attributeOptionCombo": id5,
                   dataValues: [
                       { "dataElement": id2, "categoryOptionCombo":cc,"value": id4}
                   ]
               };


            

                $.ajax({
                type: "POST",
                dataType: "json",
                async: true,
                    data    : JSON.stringify(dataObj),
                contentType: "application/json",
                url: '../../dataValueSets.json?',

               success: function (data) {
                console.log(dataObj);
               
                   def.resolve(data);
               
                   
                },
                error: function (data) {
                    def.resolve(data);
               alert("PLEASE  ENTER VALUE IN CORRECT FORMAT");

                }
                });
               return def;

                },



           getcategorycombooption : function(id1){
               var def = $.Deferred();
               $.ajax({
                   type: "GET",
                   dataType: "json",
                   contentType: "application/json",
                   url: '../../dataSets/' + id1 + '.json?fields=periodType,categoryCombo[id,name,categoryOptionCombos[id,name]]',
                   success: function (data) {
                       def.resolve(data);
                   },timeout: 2000000
               }).fail(function (xhr, status) {
                   if (status == "timeout") {
                       def.reject(status)
                   }
               });
               return def;
           }

           ,

       }



    });
	

  