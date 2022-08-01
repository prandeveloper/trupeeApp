import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {List} from 'react-native-paper';

const Faqs = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <List.Section>
            <List.Accordion
              title="What is the minimum vapital required to trade with Trupee?"
              titleNumberOfLines={5}>
              <List.Item
                description="Minimum Capital Recommended for Bank nifty aption is Rs. 15000 for 1 lot. For Equity Options, it should be Rs.50000.Minimum Capital Recommended for Bank nifty aption is Rs. 15000 for 1 lot. For Equity Options, it should be Rs.50000"
                descriptionNumberOfLines={15}
              />
            </List.Accordion>
            <List.Accordion
              title="What is the minimum vapital required to trade with Trupee?"
              titleNumberOfLines={5}>
              <List.Item
                description="Minimum Capital Recommended for Bank nifty aption is Rs. 15000 for 1 lot. For Equity Options, it should be Rs.50000.Minimum Capital Recommended for Bank nifty aption is Rs. 15000 for 1 lot. For Equity Options, it should be Rs.50000"
                descriptionNumberOfLines={15}
              />
            </List.Accordion>
            <List.Accordion
              title="What is the minimum vapital required to trade with Trupee?"
              titleNumberOfLines={5}>
              <List.Item
                description="Minimum Capital Recommended for Bank nifty aption is Rs. 15000 for 1 lot. For Equity Options, it should be Rs.50000.Minimum Capital Recommended for Bank nifty aption is Rs. 15000 for 1 lot. For Equity Options, it should be Rs.50000"
                descriptionNumberOfLines={15}
              />
            </List.Accordion>
            <List.Accordion
              title="What is the minimum vapital required to trade with Trupee?"
              titleNumberOfLines={5}>
              <List.Item
                description="Minimum Capital Recommended for Bank nifty aption is Rs. 15000 for 1 lot. For Equity Options, it should be Rs.50000.Minimum Capital Recommended for Bank nifty aption is Rs. 15000 for 1 lot. For Equity Options, it should be Rs.50000"
                descriptionNumberOfLines={15}
              />
            </List.Accordion>
            <List.Accordion
              title="What is the minimum vapital required to trade with Trupee?"
              titleNumberOfLines={5}>
              <List.Item
                description="Minimum Capital Recommended for Bank nifty aption is Rs. 15000 for 1 lot. For Equity Options, it should be Rs.50000.Minimum Capital Recommended for Bank nifty aption is Rs. 15000 for 1 lot. For Equity Options, it should be Rs.50000"
                descriptionNumberOfLines={15}
              />
            </List.Accordion>
            <List.Accordion
              title="What is the minimum vapital required to trade with Trupee?"
              titleNumberOfLines={5}>
              <List.Item
                description="Minimum Capital Recommended for Bank nifty aption is Rs. 15000 for 1 lot. For Equity Options, it should be Rs.50000.Minimum Capital Recommended for Bank nifty aption is Rs. 15000 for 1 lot. For Equity Options, it should be Rs.50000"
                descriptionNumberOfLines={15}
              />
            </List.Accordion>
            <List.Accordion
              title="What is the minimum vapital required to trade with Trupee?"
              titleNumberOfLines={5}>
              <List.Item
                description="Minimum Capital Recommended for Bank nifty aption is Rs. 15000 for 1 lot. For Equity Options, it should be Rs.50000.Minimum Capital Recommended for Bank nifty aption is Rs. 15000 for 1 lot. For Equity Options, it should be Rs.50000"
                descriptionNumberOfLines={15}
              />
            </List.Accordion>
            <List.Accordion
              title="What is the minimum vapital required to trade with Trupee?"
              titleNumberOfLines={5}>
              <List.Item
                description="Minimum Capital Recommended for Bank nifty aption is Rs. 15000 for 1 lot. For Equity Options, it should be Rs.50000.Minimum Capital Recommended for Bank nifty aption is Rs. 15000 for 1 lot. For Equity Options, it should be Rs.50000"
                descriptionNumberOfLines={15}
              />
            </List.Accordion>
          </List.Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Faqs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
