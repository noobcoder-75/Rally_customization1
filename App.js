Ext.define('CustomApp', {
                extend: 'Rally.app.App',
                componentCls: 'app',
                items: {html: 'My first app'},
                launch: function() {
                    console.log("This should be displayed!");
                    var that = this;
                    var context =  this.getContext();
                    var stories = [];
            
                    var panel = Ext.create('Ext.panel.Panel', {
                            layout: 'hbox',
                            itemId: 'parentPanel',
                            componentCls: 'panel',
                            items: [
                                
                                {
                                    xtype: 'panel',
                                    width: 1600,
                                    itemId: 'childPanel1'
                                    
                                }
                                ]
                    });
                    this.add(panel);
                }
            });