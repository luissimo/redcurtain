
// Output invoicenumber on invoice.
    $(document).on('keyup', '#factuurnummer_input', function() {
        $('.factuurnummer_output').text($(this).val())
    });

// Output invoicedate on invoice header

    $(".factuurdatum_output").text( ($("#invoice_date_3i").val()) + ' ' + ($("#invoice_date_2i").find(":selected").text()) + ' ' +  ($("#invoice_date_1i").val()) );

    $("#invoice_date_3i").change(function()
    {
        $('.factuurdatum_output').text( ($(this).val()) + ' ' + ($("#invoice_date_2i").find(":selected").text()) + ' ' +  ($("#invoice_date_1i").val()) ) ;
    });
    $("#invoice_date_2i").change(function()
    {
        $('.factuurdatum_output').text( ($("#invoice_date_3i").val()) + ' ' + ($(this).find(":selected").text()) + ' ' + ($("#invoice_date_1i").val()) ) ;
    });
    $("#invoice_date_1i").change(function()
    {
        $('.factuurdatum_output').text( ($("#invoice_date_3i").val()) + ' ' + ($("#invoice_date_2i").find(":selected").text()) + ' ' + ($(this).val()) ) ;
    });


// Output invoicedate on invoice body
    $("#date_output").text( ($("#invoice_date_3i").val()) + ' ' + ($("#invoice_date_2i").find(":selected").text()) + ' ' +  ($("#invoice_date_1i").val()) );

    $("#invoice_date_3i").change(function()
    {
        $('#date_output').text( ($(this).val()) + ' ' + ($("#invoice_date_2i").find(":selected").text()) + ' ' +  ($("#invoice_date_1i").val()) ) ;
    });
    $("#invoice_date_2i").change(function()
    {
        $('#date_output').text( ($("#invoice_date_3i").val()) + ' ' + ($(this).find(":selected").text()) + ' ' + ($("#invoice_date_1i").val()) ) ;
    });
    $("#invoice_date_1i").change(function()
    {
        $('#date_output').text( ($("#invoice_date_3i").val()) + ' ' + ($("#invoice_date_2i").find(":selected").text()) + ' ' + ($(this).val()) ) ;
    });

// Output invoice duedate on invoice body

    $(".duedate_output").text(' ' + ($("#invoice_duedate_3i").val()) + ' ' + ($("#invoice_duedate_2i").find(":selected").text()) + ' ' +  ($("#invoice_duedate_1i").val()) );

    $("#invoice_duedate_3i").change(function()
    {
        $('.duedate_output').text(' ' +  ($(this).val()) + ' ' + ($("#invoice_duedate_2i").find(":selected").text()) + ' ' +  ($("#invoice_duedate_1i").val()) ) ;
    });
    $("#invoice_duedate_2i").change(function()
    {
        $('.duedate_output').text(' ' + ($("#invoice_duedate_3i").val()) + ' ' + ($(this).find(":selected").text()) + ' ' + ($("#invoice_duedate_1i").val()) ) ;
    });
    $("#invoice_duedate_1i").change(function()
    {
        $('.duedate_output').text(' ' + ($("#invoice_duedate_3i").val()) + ' ' + ($("#invoice_duedate_2i").find(":selected").text()) + ' ' + ($(this).val()) ) ;
    });


// add a row to invoice
    $(document).ready(function() {
        var counter = $('.products_tr').length;
        $('#add_products').click(function() {
            $('.products_tr:last').after('<tr class="products_tr"><td><input class="quantity form-control" type="text" value="" name="invoice[items_attributes]['+counter+'][quantity]"></td>' +
                '<td><textarea class="form-control" name="invoice[items_attributes]['+counter+'][description]"></textarea></td>' +
                '<td><input id="unitprice" class="unitprice form-control" type="text" name="invoice[items_attributes]['+counter+'][unitprice]"></td>' +
                '<td class="row_total"></td>' +
                '<td><select class="btw_percentage" name="invoice[items_attributes]['+counter+'][btw]"><option title="21%" value="21"> 21%</option> ' +
                '<option title="6%" value="6"> 6%</option><option title="0%" value="0"> 0%</option></select></td>' +
                '<td class="delete_tr"><a class="delete" title="Rij verwijderen"><span class="ti-close"></span></a></td></tr>');
            counter ++;
        });
    });

// delete a row from invoice
    $(document).on('click', '.delete_tr', function() {
        $(this).closest('tr').remove();
        var total = 0,rowtotal = 0, invoice_btwtotaal = 0, invoice_subtotal = 0, invoice_total = 0;
        $('.products_tr').each(function(){
            $(this).find('.unitprice').val($(this).find('.unitprice').val().replace(/,/g, '.'));
            var quantity       =  parseInt($(this).find('.quantity').val());
            var unitprice      =  parseFloat($(this).find('.unitprice').val());
            var btw_percentage =  parseInt($(this).find('.btw_percentage option:selected').val());
            var btw = (btw_percentage / 100 ) + 1;
            rowtotal           =  quantity * unitprice;
            var currency = $('#invoice_currency option:selected').html();
            var fixed_rowtotal = currency + rowtotal.toFixed(2);
            var invoice_btw = (quantity * unitprice * btw) - (quantity * unitprice);
            $(this).find('.row_total').text(fixed_rowtotal);
            invoice_btwtotaal += invoice_btw;
            $('.invoice_btwtotal').val(invoice_btwtotaal.toFixed(2));
            $('.invoice_btwtotal').text(currency + invoice_btwtotaal.toFixed(2));
            var formula = (parseFloat($(this).find('.unitprice').val())) * (parseInt($(this).find('.quantity').val()));
            invoice_subtotal += formula ;
            $('.invoice_subtotal').val(invoice_subtotal.toFixed(2));
            $('.invoice_subtotal').text(currency + invoice_subtotal.toFixed(2));
            var invoice_total = invoice_subtotal + invoice_btwtotaal || 0;
            $('.invoice_total').val(invoice_total.toFixed(2));
            $('.invoice_total').text(currency + invoice_total.toFixed(2));
            total+=rowtotal;
        });
    });


// hide 'delete row button' on invoice unless atleast rows > 1
    $(document).ready(function() {
        rowlength = $('.products_tr').length;
        if(rowlength > 1) {
            $('.delete_tr').show();
        } else {
            $('.delete_tr').hide();
        }
    });


// hide 'add row button' after 10 rows
    $(document).ready(function() {
        $('.products_tr').change(function() {
            var length =  $('.products_tr').length;
            if (length >= 10) {
                $('#add_products').hide();
                alert('U kunt geen rijen meer toevoegen, maak een nieuwe factuur aan.')
            }
        })
    });



// do row total, subtotal, btwtotal & invoice total calculation if quantity value changes
    $(document).on('change', '.quantity', function(){
        var total = 0,rowtotal = 0, invoice_btwtotaal = 0, invoice_subtotal = 0, invoice_total = 0;
        $('.products_tr').each(function(){
            var quantity       =  parseInt($(this).find('.quantity').val());
            var unitprice      =  parseFloat($(this).find('.unitprice').val());
            var btw_percentage =  parseInt($(this).find('.btw_percentage option:selected').val());
            var btw = (btw_percentage / 100 ) + 1;
            rowtotal           =  quantity * unitprice;
            var currency = $('#invoice_currency option:selected').html();
            var fixed_rowtotal = currency + rowtotal.toFixed(2);
            if (parseFloat($(this).find('.unitprice').val())) {
                var invoice_btw = (quantity * unitprice * btw) - (quantity * unitprice);
                $(this).find('.row_total').text(fixed_rowtotal);
                invoice_btwtotaal += invoice_btw;
                $('.invoice_btwtotal').val(invoice_btwtotaal.toFixed(2));
                $('.invoice_btwtotal').text(currency + invoice_btwtotaal.toFixed(2));
                var formula = (parseFloat($(this).find('.unitprice').val())) * (parseInt($(this).find('.quantity').val()));
                invoice_subtotal += formula ;
                $('.invoice_subtotal').val(invoice_subtotal.toFixed(2));
                $('.invoice_subtotal').text(currency + invoice_subtotal.toFixed(2));
                var invoice_total = invoice_subtotal + invoice_btwtotaal || 0;
                $('.invoice_total').val(invoice_total.toFixed(2));
                $('.invoice_total').text(currency + invoice_total.toFixed(2));
                total+=rowtotal;
            }
            else if (isNaN(rowtotal)) {
                $(this).find('.row_total').text(currency);
            }
            else {
                $(this).find('.row_total').text(currency);
            }
        });
    });

// do row total, subtotal, btwtotal & invoice total calculation if unitprice value changes
    $(document).on('keyup', '.unitprice', function(){
        var total = 0,rowtotal = 0, invoice_btwtotaal = 0, invoice_subtotal = 0, invoice_total = 0;
        $('.products_tr').each(function(){
            $(this).find('.unitprice').val($(this).find('.unitprice').val().replace(/,/g, '.'));
            var quantity       =  parseInt($(this).find('.quantity').val());
            var unitprice      =  parseFloat($(this).find('.unitprice').val());
            var btw_percentage =  parseInt($(this).find('.btw_percentage option:selected').val());
            var btw = (btw_percentage / 100 ) + 1;
            rowtotal           =  quantity * unitprice;
            var currency = $('#invoice_currency option:selected').html();
            var fixed_rowtotal = currency + rowtotal.toFixed(2);
            var invoice_btw = (quantity * unitprice * btw) - (quantity * unitprice);
            $(this).find('.row_total').text(fixed_rowtotal);
            invoice_btwtotaal += invoice_btw;
            $('.invoice_btwtotal').val(invoice_btwtotaal.toFixed(2));
            $('.invoice_btwtotal').text(currency + invoice_btwtotaal.toFixed(2));
            var formula = (parseFloat($(this).find('.unitprice').val())) * (parseInt($(this).find('.quantity').val()));
            invoice_subtotal += formula ;
            $('.invoice_subtotal').val(invoice_subtotal.toFixed(2));
            $('.invoice_subtotal').text(currency + invoice_subtotal.toFixed(2));
            var invoice_total = invoice_subtotal + invoice_btwtotaal || 0;
            $('.invoice_total').val(invoice_total.toFixed(2));
            $('.invoice_total').text(currency + invoice_total.toFixed(2));
            total+=rowtotal;
        });
    });
// do row total, subtotal, btwtotal & invoice total calculation if btw_percentage value changes
    $(document).on('change', '.btw_percentage', function(){
        var total = 0,rowtotal = 0, invoice_btwtotaal = 0, invoice_subtotal = 0, invoice_total = 0;
        $('.products_tr').each(function(){
            var quantity       =  parseInt($(this).find('.quantity').val());
            var unitprice      =  parseFloat($(this).find('.unitprice').val());
            var btw_percentage =  parseInt($(this).find('.btw_percentage option:selected').val());
            var btw = (btw_percentage / 100 ) + 1;
            rowtotal           =  quantity * unitprice;
            var currency = $('#invoice_currency option:selected').html();
            var fixed_rowtotal = currency + rowtotal.toFixed(2);
            var invoice_btw = (quantity * unitprice * btw) - (quantity * unitprice);
            $(this).find('.row_total').text(fixed_rowtotal);
            invoice_btwtotaal += invoice_btw;
            $('.invoice_btwtotal').val(invoice_btwtotaal.toFixed(2));
            $('.invoice_btwtotal').text(currency + invoice_btwtotaal.toFixed(2));
            var formula = (parseFloat($(this).find('.unitprice').val())) * (parseInt($(this).find('.quantity').val()));
            invoice_subtotal += formula ;
            $('.invoice_subtotal').val(invoice_subtotal.toFixed(2));
            $('.invoice_subtotal').text(currency + invoice_subtotal.toFixed(2));
            var invoice_total = invoice_subtotal + invoice_btwtotaal || 0;
            $('.invoice_total').val(invoice_total.toFixed(2));
            $('.invoice_total').text(currency + invoice_total.toFixed(2));
            total+=rowtotal;
        });
    });
// do row total, subtotal, btwtotal & invoice total calculation if currency value changes
    $(document).on('change', '#invoice_currency', function Calculate() {
        var total = 0,rowtotal = 0, invoice_btwtotaal = 0, invoice_subtotal = 0, invoice_total = 0;
        $('.products_tr').each(function(){
            var quantity       =  parseInt($(this).find('.quantity').val());
            var unitprice      =  parseFloat($(this).find('.unitprice').val());
            var btw_percentage =  parseInt($(this).find('.btw_percentage option:selected').val());
            var btw = (btw_percentage / 100 ) + 1;
            rowtotal           =  quantity * unitprice;
            var currency = $('#invoice_currency option:selected').html();
            var fixed_rowtotal = currency + rowtotal.toFixed(2);
            if (parseFloat($(this).find('.unitprice').val())) {
                var invoice_btw = (quantity * unitprice * btw) - (quantity * unitprice);
                $(this).find('.row_total').text(fixed_rowtotal);
                invoice_btwtotaal += invoice_btw;
                $('.invoice_btwtotal').val(currency + invoice_btwtotaal.toFixed(2));
                $('.invoice_btwtotal').text(currency + invoice_btwtotaal.toFixed(2));
                formula = (parseFloat($(this).find('.unitprice').val())) * (parseInt($(this).find('.quantity').val()));
                invoice_subtotal += formula ;
                $('.invoice_subtotal').val(invoice_subtotal.toFixed(2));
                $('.invoice_subtotal').text(currency + invoice_subtotal.toFixed(2));
                var invoice_total = invoice_subtotal + invoice_btwtotaal || 0;
                $('.invoice_total').val(invoice_total.toFixed(2));
                $('.invoice_total').text(currency + invoice_total.toFixed(2));
                total+=rowtotal;
            }
            else if (isNaN(rowtotal)) {
                $(this).find('.row_total').text(currency);
            }
            else {
                $(this).find('.row_total').text(currency);
            }
            $('.euro-sign').text(currency);
        });
    });

// do row total, subtotal, btwtotal & invoice total calculation when DOM is ready
    $(document).ready(function() {
        var total = 0,rowtotal = 0, invoice_btwtotaal = 0, invoice_subtotal = 0, invoice_total = 0;
        $('.products_tr').each(function(){
            var quantity       =  parseInt($(this).find('.quantity').val());
            var unitprice      =  parseFloat($(this).find('.unitprice').val());
            var btw_percentage =  parseInt($(this).find('.btw_percentage option:selected').val());
            var btw = (btw_percentage / 100 ) + 1;
            rowtotal           =  quantity * unitprice;
            var currency = $('#invoice_currency option:selected').html();
            var fixed_rowtotal = currency + rowtotal.toFixed(2);
            if (parseFloat($(this).find('.unitprice').val())) {
                var invoice_btw = (quantity * unitprice * btw) - (quantity * unitprice);
                $(this).find('.row_total').text(fixed_rowtotal);
                invoice_btwtotaal += invoice_btw;
                $('.invoice_btwtotal').val(invoice_btwtotaal.toFixed(2));
                $('.invoice_btwtotal').text(currency + invoice_btwtotaal.toFixed(2));
                var formula = (parseFloat($(this).find('.unitprice').val())) * (parseInt($(this).find('.quantity').val()));
                invoice_subtotal += formula ;
                $('.invoice_subtotal').val(invoice_subtotal.toFixed(2));
                $('.invoice_subtotal').text(currency + invoice_subtotal.toFixed(2));
                var invoice_total = invoice_subtotal + invoice_btwtotaal || 0;
                $('.invoice_total').val(invoice_total.toFixed(2));
                $('.invoice_total').text(currency + invoice_total.toFixed(2));
                total+=rowtotal;
            }
            else if (isNaN(rowtotal)) {
                $(this).find('.row_total').text(currency);
            }
            else {
                $(this).find('.row_total').text(currency);
            }
        });
    });