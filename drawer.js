
<NavigationContainer>
       <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <Sidemenu {...props} />}>
         <Drawer.Screen name="Home" component={HomeScreen} />
         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
       </Drawer.Navigator>
     </NavigationContainer>